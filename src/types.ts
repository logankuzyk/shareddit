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
  prettyDate: string;
  bodyHTML: string;
  awards: Award[];
  parentID: string;
}
export interface FleshedRedditSubmission {
  author: string;
  score: string;
  prettyDate: string;
  bodyHTML: string | null;
  awards: Award[];
  title: string;
  link: string | null;
  comments: RedditComment[];
  commentsCount: number;
  type: "image" | "link" | "text" | "album";
  redact: boolean;
  sub: string;
}

export interface BackendResponse extends FleshedRedditSubmission {
  status: { message: string; code: "ok" | "error" | "loading" };
}

export type ImageTheme = "old" | "new";
