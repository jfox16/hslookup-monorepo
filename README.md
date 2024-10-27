
# HS Lookup Monorepo

**HS Lookup** is a tool designed to provide insightful statistics on Hearthstone cards, helping you make better decisions and improve your gameplay.

## Check it out here 👉 [HSLookup.net](https://www.hslookup.net)

![image](https://github.com/user-attachments/assets/9fa584b2-7db6-4426-a7da-e99e020db4a8)


## Technical deets
- The backend is running Node.js on an AWS EC2 instance. It queries the official Blizzard Hearthstone API to get up-to-date data, then processes it for use with the frontend.
- Frontend is React with Typescript, deployed to GitHub pages. 
- Parses card text to determine the keywords that apply to the card itself, not just keywords that appear in the text.
- The entire Hearthstone card library is not incredibly large (only ~2 MB) we can fetch the card library and work with it on the client instead of constantly making new requests to the server. This optimizes network usage and sorting time.
- The UI works great on desktop and mobile!
- The frontend takes the numeric values of all filtered cards and shows histogram graphs along with other state.
- Card images are lazy loaded to improve perforamnce.

