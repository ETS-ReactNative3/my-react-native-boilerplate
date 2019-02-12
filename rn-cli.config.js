const blacklist = require('metro').createBlacklist;

module.exports = {
  getBlacklistRE() {
    return blacklist([/server\/.*/]);
  },
  // https://github.com/airbnb/javascript/issues/982
  resolver: {
    sourceExts: ['js', 'json', 'ts', 'tsx', 'jsx', 'png'],
  },
};
