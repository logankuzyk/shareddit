import { Response } from 'supertest';

export interface SharedditResponse extends Response {
  body: FleshedRedditSubmission;
}
export interface Award {
  url: string;
  height: number;
  width: number;
  count: number;
}

export interface RedditComment {
  author: string;
  score: string;
  postedDate?: Date;
  prettyDate: string;
  bodyHTML: string;
  awards: Award[];
  parentID: string;
}
export interface SkeletonRedditSubmission {
  sub: string;
  postID: string;
  urlTitle?: string;
  commentID?: string;
  redact: boolean;
}
export interface FleshedRedditSubmission extends SkeletonRedditSubmission {
  author: string;
  score: string;
  postedDate?: Date;
  prettyDate: string;
  bodyHTML: string | undefined | null;
  awards: Award[];
  title: string;
  link?: string;
  comments: RedditComment[];
  commentsCount: number;
  type: 'image' | 'link' | 'text';
  redact: boolean;
}

// export interface SharedditResponse {
//     score: string,
//     author: string,
//     link: string,
//     title: string,
//     prettyDate: string,
//     commentsCount: number,
//     awards: [],
//     bodyHTML: string | null,
//     type:
// }
