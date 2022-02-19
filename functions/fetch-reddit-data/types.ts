export interface Award {
  url: string;
  count: number;
}

export interface SnoowrapCredentials {
  userAgent: string;
  clientId: string;
  clientSecret: string;
  username: string;
  password: string;
}

export interface RedditComment {
  author: string;
  score: string;
  date: number;
  bodyHTML: string;
  awards: Award[];
  child?: RedditComment;
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
  date: number;
  bodyHTML: string | null;
  awards: Award[];
  title: string;
  thumbnail: string | string[] | null;
  link: string | null;
  comments?: RedditComment;
  commentsCount: number;
  type: SubmissionType;
}

export type SubmissionType = 'image' | 'link' | 'text' | 'album' | 'video';

export interface MediaMetadataEntry {
  s: {
    x: number;
    y: number;
    u: string;
  };
}

export interface MediaMetadata {
  [key: string]: MediaMetadataEntry;
}
