import { Request, Response } from "express";
import { getCardData } from "../../utils/getCardData";

let cachedCardData: any = undefined;

export const handleGetCardData = async (req: Request, res: Response) => {
  if (cachedCardData) {
    res.json(cachedCardData);
    return;
  }

  try {
    const cardData = await getCardData();
    cachedCardData = cardData;
    res.json(cardData);
  }
  catch (e) {
    console.error('Error in getCardData');
    res.json(e);
  }
}
