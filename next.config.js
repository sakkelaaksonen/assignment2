module.exports = {
  async redirects() {
    return [
      /*
       * Calling /stations/ without station_ID will redirect to stations list view.
       */
      {
        source: "/stations",
        destination: "/",
        permanent: true,
      },
      /*
       * Just an example on how to block unwanted routes.
       * /pages/ should not have anything that is not an
       * actual route  in a real life production application.
       */
      {
        source: "/api/queries",
        destination: "/",
        permanent: true,
      },
      {
        source: "/api/resolvers",
        destination: "/",
        permanent: true,
      },
      {
        source: "/api/schemas",
        destination: "/",
        permanent: true,
      },
    ];
  },
};
