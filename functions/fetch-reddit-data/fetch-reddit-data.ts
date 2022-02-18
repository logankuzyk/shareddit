import { Handler } from "@netlify/functions";
import getRedditData from "./getRedditData";

export const handler: Handler = async (event, context) => {
  const { postID, commentID, redact, sub } = event.queryStringParameters;
  console.log({
    userAgent: process.env.USERAGENT,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    username: process.env.REDDIT_USERNAME,
    password: process.env.PASSWORD,
  });

  const body = await getRedditData({
    postID,
    commentID,
    redact: !!redact,
    sub,
  });

  return {
    statusCode: 200,
    body: JSON.stringify(body),
  };
};
