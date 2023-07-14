module.exports = {
  extends: ['gitmoji'],
  rules: {
    "type-enum": [2, "always", ["feat", "fix", "docs", "style", "refactor", "perf", "test", "build", "chore"]],
    "subject-case": [0, "always", []],
    "subject-max-length": [2, "always", 50],
    "body-max-line-length": [2, "always", 72],
    "footer-max-line-length": [2, "always", 72],
  },
};
