export type TemplateName =
  | 'award'
  | 'comment'
  | 'everything'
  | 'imageSubmission'
  | 'textSubmission'
  | 'selfText';

export interface RenderTypes {
  award: HandlebarsTemplateDelegate<any>;
  comment: HandlebarsTemplateDelegate<any>;
  everything: HandlebarsTemplateDelegate<any>;
  imageSubmission: HandlebarsTemplateDelegate<any>;
  textSubmission: HandlebarsTemplateDelegate<any>;
}

export interface Award {
  url: string;
  height: number;
  width: number;
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
  comments?: RedditComment[];
  commentsCount: number;
  type: 'image' | 'link' | 'text';
  redact: boolean;
}

export interface AwardParams {
  imageSrc: string;
  awardCount?: number;
}

export interface CommentRenderParams {
  author: string;
  score: string;
  prettyDate: string;
  bodyHTML: string;
  child: string;
}

export interface TitleRenderParams {
  author: string;
  score: string;
  link?: string;
  submissionTitle: string;
  time: string;
  commentsCount: number;
  sub: string;
  text?: string;
  awards: string;
  redact: boolean;
}

export interface EverythingParams {}
