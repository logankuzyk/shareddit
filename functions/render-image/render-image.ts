import { Handler } from "@netlify/functions";
import chromium from "chrome-aws-lambda";
import puppeteer from "puppeteer-core";

export const handler: Handler = async (event, context) => {
  if (
    !event ||
    !event.queryStringParameters ||
    !event.queryStringParameters.redditPath
  ) {
    return {
      statusCode: 400,
      body: "Bad request",
    };
  }

  const { redditPath } = event.queryStringParameters;
  const path = redditPath ? decodeURI(redditPath) : "";
  const executablePath = await chromium.executablePath;

  if (!executablePath) {
    return {
      statusCode: 500,
      body: "Error opening browser",
    };
  }

  const browser = await puppeteer.launch({
    executablePath,
    headless: chromium.headless,
    args: chromium.args,
    defaultViewport: {
      width: 1080,
      height: 2280,
    },
  });
  const browserContext = browser.defaultBrowserContext();
  browserContext.overridePermissions("https://shareddit.com", [
    "clipboard-read",
    "clipboard-write",
  ]);

  const page = await browser.newPage();
  await page.goto(`https://shareddit.com${path}`, {
    waitUntil: "networkidle0",
  });
  const copy = await page.waitForSelector("#copy");
  if (copy) {
    await copy.focus();
    await copy.click();
  }

  const data = await page.evaluate(async () => {
    return await window.navigator.clipboard.readText();
  });

  if (browser) {
    await browser.close();
  }

  return { statusCode: 200, body: data };
};
