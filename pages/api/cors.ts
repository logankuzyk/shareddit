import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  let url = decodeURIComponent(req.query.url as string);

  if (!url) {
    url = req.body.url;
  }

  if (!url) {
    res.status(403).send("URL is empty.");
  }

  const targetRes = await axios.get(url, { responseType: "stream" });

  Object.entries(targetRes.headers).forEach((header) => {
    res.setHeader(...header);
  });

  res.send(targetRes.data);
};

export default handler;
