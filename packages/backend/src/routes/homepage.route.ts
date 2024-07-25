import { Request, Response } from "express";

export const handleGetHomepage = (req: Request, res: Response) => {
  const homepageMessage = `
    <div>
      <h1>Welcome to the hslookup.net backend!</h1>
      <p>Endpoints:</p>
      <p>- GET /api/cardData to get list of cards and metadata.</p>
      <p>- GET /api/version to get current cardData version.</p>

      <br>

      <p>By Jonathan Fox https://github.com/jfox16</p>
    </div>

  `;
  res.send(homepageMessage)
}
