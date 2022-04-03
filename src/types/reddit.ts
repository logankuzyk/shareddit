export interface Listing<T> {
  kind: "Listing";
  data: {
    after?: string | null;
    before?: string | null;
    modhash: string;
    children: Array<T>;
  };
}

export interface RedditContent {
  created_utc: number;
  created: number;
  id: string;
  name: string;
  subreddit: string;
  user_reports: string[];
  saved: boolean;
  gilded: number;
  hidden: boolean;
  upvote_ratio: number;
  score: number;
  author: string;
  permalink: string;
  spoiler: boolean;
  archived: boolean;
  stickied: boolean;
}

export interface RawComment extends RedditContent {
  parent_id: string; // technically parent fullname
  is_submitter: boolean;
  body: string;
  depth: number;
  replies?: Listing<ListedRawComment>;
}

export type ListedRawComment =
  | {
      kind: "t1";
      data: CommentType["t1"];
    }
  | {
      kind: "more";
      data: CommentType["more"];
    };

export type CommentType = {
  t1: RawComment;
  more: RawMoreChildren;
};

export type PreviewEntry = {
  url: string;
  width: number;
  height: number;
};

export interface RawSubmission extends RedditContent {
  title: string;
  domain: string;
  is_self: boolean;
  locked: boolean;
  selftext?: string;
  is_original_content: boolean;
  clicked: boolean;
  thumbnail: string;
  is_video: boolean;
  preview?: {
    images: [source: PreviewEntry, resolutions: PreviewEntry[]];
  };
  url?: string;
}

export interface RawSubreddit {
  title: string;
  subscribers: number;
  header_img: string | null;
  primary_color: string;
  accounts_active: number;
  community_icon: string | null;
  public_description: string;
  created: number;
  subreddit_type: "public" | "private";
  spoilers_enabled: boolean;
  emojis_enabled: boolean;
  user_has_favorited: boolean;
  submit_text: string;
  all_original_content: boolean;
  allow_images: boolean;
  allow_videos: boolean;
  user_is_banned: boolean;
  user_is_muted: boolean;
  display_name: string;
  id: string;
  subreddit: string;
}

export interface ListedRawSubreddit {
  kind: "t5";
  data: RawSubreddit;
}

export interface ListedRawSubmission {
  kind: "t3";
  data: RawSubmission;
}

export interface ListedRawUser {
  kind: "t2";
  data: RawUser;
}

export interface RawUser {
  is_employee: boolean;
  has_visited_new_profile: boolean;
  is_friend: boolean;
  pref_no_profanity: boolean;
  has_external_account: boolean;
  pref_geopopular: string;
  pref_show_trending: boolean;
  pref_show_presence: boolean;
  snoovatar_img: string;
  snoovatar_size?: any;
  gold_expiration?: any;
  has_gold_subscription: boolean;
  is_sponsor: boolean;
  num_friends: number;
  can_edit_name: boolean;
  is_blocked: boolean;
  verified: boolean;
  new_modmail_exists: boolean;
  pref_autoplay: boolean;
  coins: number;
  has_paypal_subscription: boolean;
  has_subscribed_to_premium: boolean;
  id: string;
  can_create_subreddit: boolean;
  over_18: boolean;
  is_gold: boolean;
  is_mod: boolean;
  awarder_karma: number;
  suspension_expiration_utc?: any;
  has_stripe_subscription: boolean;
  is_suspended: boolean;
  pref_video_autoplay: boolean;
  in_chat: boolean;
  has_android_subscription: boolean;
  in_redesign_beta: boolean;
  icon_img: string;
  has_mod_mail: boolean;
  pref_nightmode: boolean;
  awardee_karma: number;
  hide_from_robots: boolean;
  password_set: boolean;
  modhash: string;
  link_karma: number;
  force_password_reset: boolean;
  total_karma: number;
  inbox_count: number;
  pref_top_karma_subreddits: boolean;
  has_mail: boolean;
  pref_show_snoovatar: boolean;
  name: string;
  pref_clickgadget: number;
  created: number;
  has_verified_email: boolean;
  gold_creddits: number;
  created_utc: number;
  has_ios_subscription: boolean;
  pref_show_twitter: boolean;
  in_beta: boolean;
  comment_karma: number;
  accept_followers: boolean;
  has_subscribed: boolean;
}

export interface RawMoreChildren {
  count: number;
  name: string;
  id: string;
  parent_id: string;
  depth: number;
  children: Array<string>;
}

export interface MoreChildren extends RawMoreChildren {
  type: "more";
  modhash: string;
}

export interface RedditSubmission extends RawSubmission {
  type: "submission";
  linkType: RedditLinkType;
  date: string;
  scoreString: string;
  modhash: string;
}

export interface RedditComment extends RawComment {
  type: "comment";
  date: string;
  replyTree: Array<RedditComment | MoreChildren>;
  scoreString: string;
  modhash: string;
}

export interface RedditUser extends RawUser {
  type: "user";
  date: string;
}

export type RedditLinkType = "self" | "video" | "image" | "external";

export interface RedditSubreddit extends RawSubreddit {
  type: "subreddit";
  date: string;
}

export interface SubredditList {
  names: Array<string>;
}

export interface ThingToLoad {
  type: "subreddit" | "user";
  name: string;
}

export interface MoreChildrenResponse {
  json: {
    data: {
      things: Array<ListedRawComment>;
    };
  };
  errors: Array<string>;
}

export interface Paginated<T> {
  after: string | null | undefined;
  before: string | null | undefined;
  data: T;
}
