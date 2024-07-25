import axios from 'axios';

let accessToken: string | undefined;

const requestAccessToken = async function() {
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': 'Basic ' + Buffer.from(`${process.env.BNET_CLIENT_ID}:${process.env.BNET_CLIENT_SECRET}`).toString('base64')
  };

  const body = 'grant_type=client_credentials';

  try {
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
    console.error('Error:', e);
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
    return !response.data.error;
  }
  catch (e) {
    console.error('Error in checkIsAccessTokenValid:', e);
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
    console.error('Error in getAccessToken:', e);
    return null;
  }
}
