import axios from 'axios';

let accessToken: string | undefined;

const requestAccessToken = async function() {
  const clientId = process.env.BNET_CLIENT_ID;
  const clientSecret = process.env.BNET_CLIENT_SECRET
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': 'Basic ' + Buffer.from(`${clientId}:${clientSecret}`).toString('base64')
  };

  const body = 'grant_type=client_credentials';

  try {
    console.info('Requesting new token with credentials:', {clientId, clientSecret})
    const response = await axios.post(`https://us.battle.net/oauth/token`, body, {
      headers,
    });
    if (response.data.access_token) {
      accessToken = response.data.access_token;
    }
    else {
      throw new Error('Error in requestAccessToken: No access token');
    }
  }
  catch (e) {
    console.error('Error in requestAccessToken');
    return null;
  }
};

const checkIsAccessTokenValid = async () => {
  if (!accessToken) {
    return false;
  }
  try {
    const response = await axios.get(
      `https://us.battle.net/oauth/check_token?token=${accessToken}`,
      {
        params: {
          token: accessToken
        }
      }
    );
    console.info('Is access token valid?', !response.data.error)
    return !response?.data?.error;
  }
  catch (e: any) {
    console.error('Error in checkIsAccessTokenValid:', e?.response);
    return false;
  }
}

export const getAccessToken = async () => {
  try {
    const isValid = await checkIsAccessTokenValid();
    if (!isValid) {
      await requestAccessToken();
    }
    return accessToken;
  }
  catch (e) {
    console.error('Error in getAccessToken:');
    return null;
  }
}
