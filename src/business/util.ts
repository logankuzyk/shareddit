import axios, { AxiosRequestConfig } from 'axios';

// Takes base64 encoded image and uploads it with the Imgur API, returns direct URL of uploaded image.
export const imgurUpload = async (img: any) => {
  const axiosOptions: AxiosRequestConfig = {
    url: 'https://imgur-apiv3.p.rapidapi.com/3/image',
    method: 'POST',
    timeout: 1000,
    headers: {
      'x-rapidapi-host': 'imgur-apiv3.p.rapidapi.com',
      'x-rapidapi-key': process.env.RAPID_KEY,
      authorization: 'Bearer ' + process.env.IMGUR_ACCESS_TOKEN,
    },
    data: {
      image: img,
    },
  };
  const res = await axios(axiosOptions);
  return res.data.body.data.link;
};

export const determinePostType = async (
  url: URL
): Promise<'image' | 'link' | 'text'> => {
  let type: 'image' | 'link' | 'text';

  if (url.hostname == 'www.reddit.com') {
    //Image albums fall here too.
    type = 'text';
  } else if (
    url.pathname.indexOf('.jpg') >= 0 ||
    url.pathname.indexOf('.jpeg') >= 0 ||
    url.pathname.indexOf('.gif') >= 0 ||
    url.pathname.indexOf('.png') >= 0
  ) {
    type = 'image';
  } else {
    type = 'link';
  }

  return type;
};

// Turns current UTC epoch time into a readable format, the same shown on reddit comments.
export const longTime = async (utc: number): Promise<string> => {
  let date = new Date();
  let delta = date.getTime() / 1000 - utc;
  if (Math.floor(delta / 60) < 1) {
    return 'just now';
  } else if (Math.floor(delta / 60) < 60) {
    if (Math.floor(delta / 60) == 1) {
      return '1 minute ago';
    } else {
      return Math.floor(delta / 60) + ' minutes ago';
    }
  } else if (Math.floor(delta / 3600) < 24) {
    if (Math.floor(delta / 3600) == 1) {
      return '1 hour ago';
    } else {
      return Math.floor(delta / 3600) + ' hours ago';
    }
  } else if (Math.floor(delta / 86400) < 365) {
    if (Math.floor(delta / 86400) == 1) {
      return '1 day ago';
    } else {
      return Math.floor(delta / 86400) + ' days ago';
    }
  } else {
    if (Math.floor(delta / 31536000) == 1) {
      return '1 year ago';
    } else {
      return Math.floor(delta / 31536000) + ' years ago';
    }
  }
};

export const prettyScore = async (score: number): Promise<string> => {
  let output: string = score.toString();
  if (Number(score) >= 10000) {
    score = Number(score) / 1000;
    output = score.toString();
    output = output.substring(0, 4) + 'k';
  }
  return output;
};
