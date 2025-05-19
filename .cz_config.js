"use strict";
module.exports = {
  types: [
    {
      value: "✨ feat",
      name: "✨ feat:     機能追加",
      title: "Features",
    },
    {
      value: "🐛 fix",
      name: "🐛 fix:      バグ修正",
      title: "Bug Fixes",
    },
    {
      value: "♻️ refactor",
      name: "♻️  refactor: コード整理 (機能に影響しない変更)",
      title: "Code Refactoring",
    },
    {
      value: "⚡️ perf",
      name: "⚡️ perf:     パフォーマンス改善 (機能に影響しない変更)",
      title: "Performance Improvements",
    },
    {
      value: "✅ test",
      name: "✅ test:     テストの追加や修正",
      title: "Tests",
    },
    {
      value: "🔥 remove",
      name: "🔥 remove:   コードやファイルの削除",
      title: "Removes",
    },
    {
      value: "📝 docs",
      name: "📝 docs:     ドキュメントの追加や修正",
      title: "Documentation",
    },
    {
      value: "🏗️ build",
      name: "🏗️  build:    ビルドシステムや外部依存に関する変更 (例: npm, mise)",
      title: "Builds",
    },
    {
      value: "🔧 chore",
      name: "🔧 chore:    その他(補助ツール等）の変更",
      title: "Chores",
    },
    {
      value: "🚧 wip",
      name: "🚧 wip:      作業中",
      title: "WIPs",
    },
  ],
  skipQuestions: ['scope'],
  messages: {
    type: "コミットタイプを選択:\n",
    subject: "変更内容の概要:\n",
    body: '変更内容の詳細（"|"で改行）(optional):\n',
    breaking: "破壊的変更(使えなくなる機能がある場合、必ず記載):\n",
    footer: '関連issueを追記 (例:"Fix #123", " Close #123")(optional):\n',
    confirmCommit: "この内容でコミットしてよろしいですか?",
  },
  allowBreakingChanges: ["✨ feat", "🐛 fix", "🔥 remove"],
};
