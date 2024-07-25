import axios from "axios";
import _ from 'lodash';
import { getAccessToken } from "./auth.api"

const locale = 'en_US';

const KEYS_TO_KEEP = [
  'attack',
  'cardTypeId',
  'cardSetId',
  'childIds',
  'classId',
  'health',
  'id',
  'image',
  'keywordIds',
  'manaCost',
  'minionTypeId',
  'multiClassIds',
  'name',
  'rarityId',
  'spellSchoolId',
  'text',
];

export const fetchAllCards = async () => {
  const requestUrl = 'https://us.api.blizzard.com/hearthstone/cards';
  const cards: any[] = [];
  const cardNameSet = new Set<string>();
  const pageSize = 1000;
  let page = 1;
  let pageCount = 1;

  try {
    const accessToken = await getAccessToken();

    do {
      const response = await axios.get(
        requestUrl,
        {
          params: {
            'access_token': accessToken,
            locale,
            page,
            pageSize,
            set: 'wild'
          }
        }
      );

      if (Array.isArray(response.data.cards)) {
        response.data.cards.forEach((card: any) => {
          if (!cardNameSet.has(card.name)) {
            cards.push(_.pick(card, KEYS_TO_KEEP));
            cardNameSet.add(card.name);
          }
        })
      } 

      pageCount = (typeof response.data.pageCount === 'number')
        ? response.data.pageCount
        : 0;
      page++;
    }
    while (page <= pageCount)

    return cards;
  }
  catch (e) {
    console.error('Error:', e);
    return null;
  }
}

export const fetchMetadata = async () => {
  const requestUrl = 'https://us.api.blizzard.com/hearthstone/metadata';
  try {
    const accessToken = await getAccessToken();
    if (accessToken) {
      const response = await axios.get(
        requestUrl,
        {
          params: {
            'access_token': accessToken,
            locale,
          }
        }
      );
      return response.data;
    }
    else {
      throw new Error('Error in fetchMetadata: no accessToken');
    }
  }
  catch (e) {
    console.error('Error:', e);
    return null;
  }
}
