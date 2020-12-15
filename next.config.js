module.exports = {
  async redirects() {
    return [
      {
        source: "/stations",
        destination: "/",
        permanent: true,
      },
    ];
  },
};
