import _ from 'lodash';

import { Card } from 'types/cardTypes';
import { Metadata } from 'types/metadataTypes';
import { KeywordTotal, StatName, StatTotal } from 'types/statDisplayTypes';

// import {
//   descriptionTokens,
// } from './filterConstants';

const DEFAULT_STAT_TOTAL = {
  min: Number.POSITIVE_INFINITY,
  max: Number.NEGATIVE_INFINITY,
  sum: 0,
  mean: 0,
  median: 0,
  stdev: 0,
  values: [],
  frequencies: [],
  maxFrequency: Number.NEGATIVE_INFINITY
};

const generateStatTotals = (cards: Card[]) => {
  const statsToTrack: StatName[] = [ 'manaCost', 'attack', 'health'];
  const totals: Record<StatName, StatTotal> = {
    attack: _.cloneDeep(DEFAULT_STAT_TOTAL),
    health: _.cloneDeep(DEFAULT_STAT_TOTAL),
    manaCost: _.cloneDeep(DEFAULT_STAT_TOTAL),
  };

  // Add card values to stat totals
  cards.forEach((card) => {
    statsToTrack.forEach((stat) => {
      // Always track manaCost.
      // For health and attack, only track if this card is a minion.
      if (
        stat === 'manaCost' ||
        card.cardTypeId === 4
      ) {
        const cardStatValue = card[stat];
        if (!cardStatValue) {
          return;
        }

        totals[stat].sum += cardStatValue;
        totals[stat].values.push(cardStatValue);

        if (cardStatValue < totals[stat].min) {
          totals[stat].min = cardStatValue;
        }
        if (cardStatValue > totals[stat].max) {
          totals[stat].max = cardStatValue;
        }

        let frequencies = totals[stat].frequencies;
        frequencies[cardStatValue] = (frequencies[cardStatValue] ?? 0) + 1;

        if (frequencies[cardStatValue] > totals[stat].maxFrequency) {
          totals[stat].maxFrequency = frequencies[cardStatValue]
        }
      }
    })
  })

  // Find mean, median, stdev
  statsToTrack.forEach((stat) => {
    if (Object.values(totals[stat].frequencies).length > 0) {
      // Mean
      totals[stat].mean = totals[stat].sum / totals[stat].values.length

      // Median
      totals[stat].values.sort((a, b) => a - b)
      let midPoint = Math.floor((totals[stat].values.length - 1) / 2)
      if (cards.length % 2 !== 0) {
        totals[stat].median = totals[stat].values[midPoint] // middle number
      } else {
        totals[stat].median =
          (totals[stat].values[midPoint] + totals[stat].values[midPoint + 1]) / 2 // avg of middle two numbers
      }

      // StDev
      let sumDiffSq = 0
      totals[stat].values.forEach(
        (value) => (sumDiffSq += Math.pow(value - totals[stat].mean, 2))
      )
      totals[stat].stdev = Math.sqrt(sumDiffSq / totals[stat].values.length)
    }
  })

  return totals;
}

const generateKeywordTotals = (cards: Card[], metadata: Metadata) => {
  if (!Array.isArray(cards) || !Array.isArray(metadata.keywords)) {
    return undefined;
  }

  const keywordSlugs: Record<string, string> = {};
  const keywordTotals: Record<string, KeywordTotal> = {};

  // Populate dicts
  metadata.keywords.forEach((keyword) => {
    keywordSlugs[keyword.id] = keyword.slug;
    keywordTotals[keyword.slug] = {
      name: keyword.name,
      count: 0
    };
  })

  // Count keywords
  cards.forEach((card) => {
    if (card.keywordIds) {
      card.keywordIds.forEach((keywordId) => {
        let slug = keywordSlugs[keywordId];
        if (keywordTotals[slug]) {
          keywordTotals[slug].count++
        }
      })
    }
  });

  return keywordTotals;
}

export { generateStatTotals, generateKeywordTotals }
