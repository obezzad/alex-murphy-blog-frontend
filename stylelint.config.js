module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier'
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  "ignoreFiles": ["**/*.vue"], // FIXME
  rules: {
    // "scss/at-rule-no-unknown": true
  }
}
