import { Handler } from "@netlify/functions";
import chromium from "chrome-aws-lambda";
import puppeteer, { Page } from "puppeteer-core";

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

  const origin = "https://shareddit.com";
  const { redditPath: path } = event.queryStringParameters;
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
  await browserContext.overridePermissions(origin, ["clipboard-write"]);
  await browserContext.overridePermissions(origin, ["clipboard-read"]);

  const page = await browser.newPage();
  await page.goto(`https://shareddit.com${path}`, {
    waitUntil: "networkidle0",
  });

  const data = await getData(page, origin, path);

  if (browser) {
    await browser.close();
  }

  if (data) {
    return { statusCode: 200, body: data };
  } else {
    return { statusCode: 500, body: "Something went wrong" };
  }
};

const getData = async (
  page: Page,
  origin: string,
  path: string
): Promise<string | undefined> => {
  await page.goto(`${origin}${path}`, {
    waitUntil: "networkidle0",
  });
  const copy = await page.waitForSelector("#copy");
  if (copy) {
    console.log("hi");
    await copy.focus();
    await copy.click();
    const loaded = await page.waitForSelector("#loaded");
    if (loaded) {
      const input = await page.waitForSelector("#image-base64");
      if (input) {
        //Had to do it to em
        //@ts-ignore
        const data = await input.evaluate((el) => el.value);
        return data;
      }
    }
  }
};
