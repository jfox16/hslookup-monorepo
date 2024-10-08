import { Keyword } from "./metadataTypes";

export interface DisplayStat {
  name: string;
  accessor: StatName;
  color: string;
  image: string;
}

export interface KeywordTotal {
  keyword: Keyword;
  count: number;
  decimal: number;
}

export type StatName = 'attack'|'health'|'manaCost';

export interface StatTotal {
  min: number,
  max: number,
  sum: number,
  mean: number,
  median: number,
  stdev: number,
  values: number[],
  frequencies: Record<number, number>,
  maxFrequency: number
}
