module.exports = {
  branches: ["main"],
  plugins: [
    // 1. コミット履歴から次期バージョン番号を算出する。
    [
      "@semantic-release/commit-analyzer",
      {
        preset: "conventionalcommits",
        parserOpts: {
          headerPattern: /^(\p{Emoji}*)?\s*(\w*)(?:\((.*)\))?:\s*(.*)$/u,
          headerCorrespondence: ["emoji", "type", "scope", "subject"],
          noteKeywords: ["BREAKING CHANGE", "BREAKING CHANGES"],
        },
        releaseRules: [
          { breaking: true, release: "major" },
          { type: "feat", release: "minor" },
          { type: "fix", release: "patch" },
          { type: "perf", release: "patch" },
          { type: "build", release: "patch" },
        ],
      },
    ],

    // 2. リリースノートのためのコンテンツ（テキスト）を生成する。
    [
      "@semantic-release/release-notes-generator",
      {
        preset: "conventionalcommits",
        parserOpts: {
          headerPattern: /^(\p{Emoji}*)?\s*(\w*)(?:\((.*)\))?:\s*(.*)$/u,
          headerCorrespondence: ["emoji", "type", "scope", "subject"],
          noteKeywords: ["BREAKING CHANGE", "BREAKING CHANGES"],
        },
      },
    ],

    // 3. '2' で生成されたリリースノート用コンテンツを Changelog ファイルに記述する。
    [
      "@semantic-release/changelog",
      {
        changelogFile: "CHANGELOG.md",
      },
    ],

    // 4. package.json の version フィールドを次期バージョン番号で更新する。
    [
      "@semantic-release/npm",
      {
        npmPublish: false,
      },
    ],

    // 5. リリースフローで発生したアセットの更新差分をリポジトリにコミットする。
    [
      "@semantic-release/git",
      {
        assets: ["package.json", "CHANGELOG.md"],
        message: "🔖 Release: ${nextRelease.version}\n\n${nextRelease.notes}",
      },
    ],

    // 6. '2' で生成されたリリースノート用コンテンツを用いて GitHub Release を追加する。
    "@semantic-release/github",
  ],
};
