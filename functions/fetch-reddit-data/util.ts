import { Award, SubmissionType, MediaMetadata } from './types';

export const determinePostType = async (
  link: string,
  isVideo: boolean,
  isSelf: boolean
): Promise<SubmissionType> => {
  const url = new URL(link);
  let type: SubmissionType = 'link';

  if (isVideo) {
    type = 'video';
  } else if (url.hostname == 'www.reddit.com') {
    if (url.pathname.match(/gallery/)) {
      // console.log(url.pathname);
      type = 'album';
    } else if (isSelf) {
      type = 'text';
    }
  } else if (
    url.pathname.indexOf('.jpg') >= 0 ||
    url.pathname.indexOf('.jpeg') >= 0 ||
    url.pathname.indexOf('.gif') >= 0 ||
    url.pathname.indexOf('.png') >= 0
  ) {
    type = 'image';
  }

  return type;
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

export const buildAwards = async (all_awardings: Award[]) => {
  let output = [];
  for (let award of all_awardings) {
    output.push({
      // @ts-ignore
      src: award.resized_static_icons[2].url,
      count: award.count > 1 ? award.count : 1,
    });
  }
  return output;
};

export const extractAlbumImages = async (
  media_metadata: MediaMetadata
): Promise<string[]> => {
  const output: string[] = [];
  if (media_metadata === null || media_metadata === undefined) {
    return [''];
  }
  for (let entry of Object.values(media_metadata)) {
    output.push(entry.s.u);
  }
  if (output.length === 0) {
    return [''];
  } else {
    return output;
  }
};
