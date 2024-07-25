import { fetchAllCards, fetchMetadata } from "../bnetApi/hearthstone.api"

export const getCardData = async () => {
  console.info('gettin card data')
  try {
    const [
      cards,
      metadata,
    ] = await Promise.all([
      fetchAllCards(),
      fetchMetadata(),
    ]);

    return {
      cards,
      metadata
    }
  }
  catch (e) {
    console.error(e);
  }
}
