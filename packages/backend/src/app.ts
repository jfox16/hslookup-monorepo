
import 'dotenv/config'; // Initialize dotenv
import express from 'express';
import cors from 'cors';

import { handleGetCardData } from './routes/cardData/cardData.route';
import { handleGetHomepage } from './routes/homepage/homepage.route';
import { handleGetVersion } from './routes/version.route';

const app = express();
const port =  process.env.NODE_ENV === 'production' ? 22 : 5000;

app.use(express.json());
app.use(cors());

app.get('/', handleGetHomepage)
app.get('/api/cardData', handleGetCardData);
app.get('/api/version', handleGetVersion);

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
