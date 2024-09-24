
/**
 * Parses card text to determine the keywords that apply to the card itself.
 * Returns a list of keywords.
 */
export const parseInherentKeywordIds = (
  text: string,
  keywords: {name: string, id: number, regex: string}[]
) => {

  // Gosh darn kragg
  text.replace('Charrrrrge', 'Charge');

  const keywordPattern = keywords.map(keyword => keyword.regex).join('|');
  const punctuationPattern = '[.,!":]';
  const regex = new RegExp(`(${keywordPattern})|(${punctuationPattern})`, 'g');

  const tokens = text
    .replace(/<\/?b>/g, '')
    .split(regex)
    .map(segment => segment?.trim())
    .filter(Boolean)
    .filter(segment => ![',', ':', 'and'].includes(segment))
    .filter(segment => !/^\(.*\)$/.test(segment)) // Remove (X)
    .filter(segment => !/^\+/.test(segment)); // Remove +X

  const sentences: string[][] = [[]];
  const inherentKeywords: string[] = [];
  let isQuotesOpen = false;

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    const nextToken = i + 1 < tokens.length ? tokens[i+1] : undefined;

    if (token.match('[.!]')) {
      sentences.push([]);
      continue;
    }

    const currentSentence = sentences[sentences.length-1];

    if (token === '"') {
      isQuotesOpen = !isQuotesOpen;
      if (isQuotesOpen) {
        sentences.push([token]);
      }
      else {
        sentences.push([]);
      }
      continue;
    }

    // Anything inside quotes gets added to current sentence
    if (isQuotesOpen) {
      currentSentence.push(token);
      continue;
    }
    
    /**
     * Ok so this part is kinda confusing, it can be summed up by:
     * 1. Keywords outside of sentences count as inherent keywords.
     * 2. Anything inside quotations are ignored.
     */
    const tokenIsKeyword = token.match(keywordPattern);
    const isStartOfSentence = currentSentence.length === 0;

    if (tokenIsKeyword) {
      if (isStartOfSentence) {
        const nextTokenIsLowercase = nextToken && /[a-z0-9]/.test(nextToken.charAt(0));
        if (nextTokenIsLowercase) {
          currentSentence.push(token);
        }
        else {
          inherentKeywords.push(token);
        }
      }
      else {
        currentSentence.push(token);
      }
    }
    else if (/[A-Z]/.test(token.charAt(0))) {
      sentences.push([token]);
    }
    else {
      currentSentence.push(token);
    }
  }

  const result: number[] = [];
  
  inherentKeywords
    .forEach(keywordText => {
      const matchingKeyword = keywords.find(keyword => {
        return keywordText.match(keyword.regex);
      });
      if (matchingKeyword) {
        result.push(matchingKeyword.id)
      }
    });

  return result;
}
