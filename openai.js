import { Configuration, OpenAIApi } from "openai";
import { tweetCouplet } from "./twitterClient.js";
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);
//TODO: Improve Prompt
export const generateGurbaniCouplet = async () => {
  try {
    const completion = await openai.createCompletion({
      model: process.env.GPT_MODEL,
      prompt: "Generate a Gurbani couplet with translation and meaning",
      max_tokens: 250,
    });

    const couplet = completion.data.choices[0].text;
    await tweetCouplet(couplet);
    return {
      statusCode: 200,
      body: couplet,
    };
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
      return {
        statusCode: error.response.status,
        body: error.response.data.error,
      };
    } else {
      console.log(error.message);
      return {
        statusCode: 500,
        body: error.message,
      };
    }
  }
};
