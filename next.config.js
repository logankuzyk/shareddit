module.exports = {
  async rewrites() {
    return [
      {
        source: "/reddit-image/:host/:file/:path*",
        destination: "https://:host/:file",
      },
      {
        source: "/reddit-flair/:host/:file/:name/:path*",
        destination: "https://:host/:file/:name",
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/r/:sub/comments/:postId/:title/:commentId",
        destination: "/generate?sub=:sub&postId=:postId&commentId=:commentId",
        permanent: true,
      },
      {
        source: "/r/:sub/comments/:postId",
        destination: "/generate?sub=:sub&postId=:postId",
        permanent: true,
      },
      {
        source: "/r/:sub/comments/:postId/:title",
        destination: "/generate?sub=:sub&postId=:postId",
        permanent: true,
      },
    ];
  },
};
