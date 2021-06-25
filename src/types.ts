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
  color: string | null;
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
  link: string | null;
  comments?: RedditComment;
  commentsCount: number;
  type: SubmissionType;
  redact: boolean;
  sub: string;
  color: string | null;
}

export interface BackendResponse extends FleshedRedditSubmission {
  status: { message: string; code: "ok" | "error" | "loading" };
}

export type ImageTheme = "dark" | "light";

export type SubmissionType = "image" | "link" | "text" | "album" | "video";
