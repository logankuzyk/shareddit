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
};
