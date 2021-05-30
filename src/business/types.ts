import { Request } from 'express';

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
    awards: string[];
    parentID: string;
    //child: RedditComment | null; could work?
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
    awards: string[];
    title: string;
    link?: string;
    comments?: RedditComment[];
    commentsCount: number;
    type: "image" | "link" | "text";
    
}
