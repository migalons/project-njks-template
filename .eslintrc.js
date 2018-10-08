module.exports = {
  "extends": ["eslint:recommended", "plugin:node/recommended",  "plugin:security/recommended"],
  "plugins": ["mocha", "security"],
  "rules": {
    "node/exports-style": ["error", "module.exports"],
    "node/prefer-global/buffer": ["error", "always"],
    "node/prefer-global/console": ["error", "always"],
    "node/prefer-global/process": ["error", "always"],
    "node/prefer-global/url-search-params": ["error", "always"],
    "node/prefer-global/url": ["error", "always"],
    "mocha/no-exclusive-tests": "error"
  }
};