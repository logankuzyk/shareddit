import { Handler } from "@netlify/functions";
import * as puppeteer from "puppeteer";

export const handler: Handler = async (event, context) => {
  const { redditPath } = event.queryStringParameters;
  const path = decodeURI(redditPath);
  const browser = await puppeteer.launch({
    headless: true,
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
  await page.goto(`https://shareddit.com${path}`);
  const copy = await page.waitForSelector("#copy");
  copy.focus();
  copy.click();

  const data = await navigator.clipboard.readText();

  return { statusCode: 200, body: data };
};
