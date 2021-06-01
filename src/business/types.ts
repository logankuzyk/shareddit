export interface Award {
  url: string;
  height: number;
  width: number;
  sizes?: Award[];
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
  redact?: boolean;
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
  comments?: RedditComment[];
  commentsCount: number;
  type: 'image' | 'link' | 'text';
}
