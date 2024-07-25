import { Request, Response } from "express";
import { getCardData } from "../../utils/getCardData";

export const handleGetCardData = async (req: Request, res: Response) => {
  try {
    const cardData = await getCardData();
    res.json(cardData);
  }
  catch (e) {
    console.error('Error', e);
  }
}
