import { Handler } from "@netlify/functions";
import getRedditData from "./getRedditData";

export const handler: Handler = async (event, context) => {
  const { postID, commentID, redact, sub } = event.queryStringParameters
    ? event.queryStringParameters
    : { postID: "", commentID: "", redact: "", sub: "" };

  if (postID && sub) {
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
  } else {
    return {
      statusCode: 400,
      body: "Error: missing parameters",
    };
  }
};
