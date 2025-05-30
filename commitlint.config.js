module.exports = {
  extends: ["gitmoji"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "refactor",
        "perf",
        "test",
        "remove",
        "docs",
        "build",
        "chore",
        "wip",
      ],
    ],
    "subject-case": [0, "always", []],
    "subject-max-length": [2, "always", 50],
    "scope-empty": [0, "never"],
    "body-max-line-length": [2, "always", 72],
    "footer-max-line-length": [2, "always", 72],
  },
};
