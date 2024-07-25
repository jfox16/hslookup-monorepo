import cliProgress from 'cli-progress';
import 'dotenv/config'; // Initialize dotenv
import { Client } from 'pg';

// import { Card } from '@hslookup/shared';

// import { HearthstoneAPIHandler } from './modules/hearthstone-api';


// const client = new Client({
//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false
//   }
// });

// const apiHandler = new HearthstoneAPIHandler(
//   process.env.CLIENT_ID as string,
//   process.env.CLIENT_SECRET as string
// );

// const dropTableQuery = `
//   DROP TABLE IF EXISTS cards;
// `;

// const createTableQuery = `
//   CREATE TABLE cards (
//     id INT NOT NULL PRIMARY KEY,
//     classId INT,
//     cardTypeId INT,
//     cardSetId INT,
//     multiClassIds INT[],
//     minionTypeId INT,
//     rarityId INT,
//     health INT,
//     attack INT,
//     manaCost INT,
//     name VARCHAR(255),
//     text VARCHAR(255),
//     image VARCHAR(255),
//     keywordIds INT[]
//   );
// `;

// function querifyCard(card: Card): string {
//   const keys: string[] = [];
//   const values: (number | string)[] = [];
  
//   Object.keys(card).forEach(key => {
//     const value = (card as any)[key];

//     if (value === undefined || value === null) {
//       return;
//     }

//     keys.push(key);

//     if (typeof value === 'number') {
//       values.push(value);
//     } else if (typeof value === 'string') {
//       values.push(`'${value.replace(/'/g, `''`)}'`); // Escape single quotes in strings
//     } else if (Array.isArray(value)) {
//       if (value.length > 0) {
//         values.push(`ARRAY[${value.join(', ')}]`); // Format array values
//       } else {
//         values.push('NULL');
//       }
//     } else {
//       values.push(value);
//     }
//   });

//   const query = `
//     INSERT INTO cards (${keys.join(', ')})
//     VALUES (${values.join(', ')});
//   `;

//   return query;
// }

// async function initialize() {
//   try {
//     console.log('Getting cards from Blizzard API...');
//     const data = await apiHandler.fetchAllCardData('us', 'en_US');
//     const cards: Card[] = data.cards;

//     await client.connect();

//     console.log('Deleting old table.');
//     try {
//       await client.query(dropTableQuery);
//     } catch (err) {
//       console.error(err);
//     }

//     console.log('Creating new table.');
//     await client.query(createTableQuery);

//     console.log('Adding cards to table...');
//     const progressBar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
//     progressBar.start(cards.length, 0);

//     for (let i = 0; i < cards.length; i++) {
//       const card = cards[i];
//       const insertCardQuery = querifyCard(card);
//       await client.query(insertCardQuery);
//       progressBar.update(i + 1);
//     }

//     client.end();
//     progressBar.stop();

//     console.log('\nDone!');
//   } catch (err) {
//     console.error(err);
//   }
// }

// initialize();
