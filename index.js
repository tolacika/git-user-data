const gitConfig = require('git-config-path');
const parse = require('parse-git-config');

const defaults = {
  type: 'global',
  cwd: process.cwd(),
};

const parseConfig = function (opts) {
  const options = Object.assign({}, defaults, opts || {});
  return parse.sync({ cwd: options.cwd, path: gitConfig(options) });
};

module.exports = {
  getName: function (opts) {
    const conf = parseConfig(opts);
    return conf.user ? conf.user.name : null;
  },
  getEmail: function (opts) {
    const conf = parseConfig(opts);
    return conf.user ? conf.user.email : null;
  },
  getRaw: function (opts) {
    return parseConfig(opts).user || null;
  },
};
