const Reddit = require("snoowrap");
const dotenv = require("dotenv").config();

const r = new Reddit({
  userAgent: "script:com.logankuzyk.shareddit-reply-bot:v1.0.0 (by /u/C1RRU5)",
  clientId: process.env.BOT_ID,
  clientSecret: process.env.BOT_SECRET,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
});

refresh = async () => {
  let comments = await r.getInbox({ filter: "unread" });
  for (let trigger of comments) {
    let parent = await trigger.parent_id;
    let context = await trigger.context;
    context = context.substr(0, context.lastIndexOf("/"));
    if (!parent.startsWith("t1")) {
      context = context.substr(0, context.lastIndexOf("/"));
      console.log("top level comment");
    } else {
      context = context.substr(0, context.lastIndexOf("/"));
      context = context.substr(0, context.lastIndexOf("/"));
      context += parent.substr(parent.indexOf("_") + 1, parent.length - 1);
      console.log(context);
    }
    let reply =
      "I turned this comment thread into an image for easy sharing. \n \n View it here: https://shareddit.com" +
      context +
      '\n \n If you\'re on desktop, try adding "sha" to the beginning of the reddit URL to generate the image on shareddit! \n \n [author](https://www.reddit.com/user/c1rru5)';
    trigger.reply(reply);
    console.log("replied");
  }
  await r.markMessagesAsRead(comments);
  console.log("remaining " + r.ratelimitRemaining);
  console.log("expiration " + r.ratelimitExpiration);
};

(module.exports.start = async () => {
  console.log("bot started");
  while (true) {
    if (Date.now() % 20000 == 0) {
      try {
        let comments = await refresh();
      } catch (e) {
        if (e.statusCode == 400) {
          //   console.log("http 400 - no unread messages");
        } else {
          console.log(e);
        }
      }
    }
  }
})();
