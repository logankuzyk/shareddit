export interface Award {
  src: string;
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
export interface FleshedRedditSubmission {
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
  redact: boolean;
  sub: string;
}

export interface BackendResponse extends FleshedRedditSubmission {
  status: { message: string; code: "ok" | "error" | "loading" };
}

export type SubmissionType = "image" | "link" | "text" | "album" | "video";
