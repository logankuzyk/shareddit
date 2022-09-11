export const censorUsernames = (text: string) => {
  const usernames = /(\/u\/\w+)+/g;

  return text.replaceAll(usernames, "[a redditor]");
};

export const censorSubreddits = (text: string) => {
  const subreddits = /(\/r\/\w+)+/g;

  return text.replaceAll(subreddits, "[a subreddit]");
};
