const withSourceMaps = require("@zeit/next-source-maps");
const config = {
  env: {
    PRODUCTION: false,
    COMPANY: "Vorbulla",
    tagManager: "GTM-NF873VB",
    loader: true
  },
  webpack(config, _options) {
    return config;
  }
};

module.exports = withSourceMaps(config);
