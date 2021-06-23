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
  prettyDate: string;
  bodyHTML: string;
  awards: Award[];
  parentID: string;
  color: string | null;
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
  prettyDate: string;
  bodyHTML: string | null;
  awards: Award[];
  title: string;
  link: string | null;
  comments: RedditComment[];
  commentsCount: number;
  type: 'image' | 'link' | 'text';
  color: string | null;
}
