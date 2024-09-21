import { Request, Response } from "express";
import { fetchMetadata } from "../bnetApi/hearthstone.api";

export const handleGetVersion = async (req: Request, res: Response) => {
  try {
    const metadata = await fetchMetadata();
    res.json({
      version: metadata.version
    });
  }
  catch (e) {
    res.json(e);
  }
}
