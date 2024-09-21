import { Request, Response } from "express";

export const handleGetHomepage = (req: Request, res: Response) => {
  const homepageHtml = `
    <div>
      <h1>Welcome to the hslookup.net backend!</h1>
      <p>Endpoints:</p>
      <p>- <a href="/api/cardData">GET /api/cardData</a> to get list of cards and metadata.</p>
      <p>- <a href="/api/version">GET /api/version</a> to get current cardData version.</p>

      <br>

      <p>By Jonathan Fox https://github.com/jfox16</p>
    </div>

  `;
  res.send(homepageHtml);
}
