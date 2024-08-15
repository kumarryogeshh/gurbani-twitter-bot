import { TwitterApi } from "twitter-api-v2";

const client = new TwitterApi({
  appKey: process.env.TWITTER_CONSUMER_KEY,
  appSecret: process.env.TWITTER_CONSUMER_SECRET,
  accessToken: process.env.TWITTER_OAUTH_TOKEN,
  accessSecret: process.env.TWITTER_OAUTH_TOKEN_SECRET,
});

const rwClient = client.readWrite;

export const tweetCouplet = async (couplet) => {
  try {
    const message = `🙏 ੴ ਸਤਿਗੁਰ ਪ੍ਰਸਾਦਿ  🙏\n\n${couplet}\n\n#Gurbani #Sikhism #Khalsa`;
    await rwClient.v2.tweet(message);
  } catch (e) {
    console.error(e);
    throw e;
  }
};
