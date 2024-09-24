import { fetchAllCards, fetchMetadata } from "../bnetApi/hearthstone.api"
import { processCardData } from "./processCardData";

export const getCardData = async () => {
  try {
    const [
      cards,
      metadata,
    ] = await Promise.all([
      fetchAllCards(),
      fetchMetadata(),
    ]);

    if (cards && metadata) {
      processCardData(cards, metadata);
    }

    return {
      cards,
      metadata
    }
  }
  catch (e) {
    console.error(e);
  }
}
