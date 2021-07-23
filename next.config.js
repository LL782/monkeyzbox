module.exports = {
  async redirects() {
    return [
      {
        source: "/everything-passes",
        destination: "/",
        permanent: true,
      },
    ];
  },
};
