
export const pluralize = (word: string, count: number) => {
  if (count === 1) {
    return word;
  }
  
  // Handle '-es' rules
  if (word.endsWith('s') || word.endsWith('x') || word.endsWith('z') || word.endsWith('sh') || word.endsWith('ch')) {
    return `${word}es`;
  }

  // Handle '-ies' rules
  if (word.endsWith('y')) {
    return `${word.slice(0, -1)}ies`;
  }

  return `${word}s`;
}
