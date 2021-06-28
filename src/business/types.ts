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
  color: string | null;
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
  link: string | null;
  comments?: RedditComment;
  commentsCount: number;
  type: SubmissionType;
  color: string | null;
}

export type SubmissionType = 'image' | 'link' | 'text' | 'album' | 'video';
