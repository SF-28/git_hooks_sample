"use strict";
module.exports = {
  types: [
    {
      value: "✨ feat",
      name: "✨ feat:     新機能",
      title: "Features",
    },
    {
      value: "🐛 fix",
      name: "🐛 fix:      バグ修正",
      title: "Bug Fixes",
    },
    {
      value: "📝 docs",
      name: "📝 docs:     ドキュメントの変更",
      title: "Documentation",
    },
    {
      value: "🎨 style",
      name: "🎨 style:    フォーマットの変更（コードの動作に影響しないスペース、フォーマット、セミコロンなどの変更）",
      title: "Styles",
    },
    {
      value: "♻️ refactor",
      name: "♻️  refactor: リファクタリング（機能追加やバグ修正を含まない変更）",
      title: "Code Refactoring",
    },
    {
      value: "⚡️ perf",
      name: "⚡️ perf:     パフォーマンスの改善",
      title: "Performance Improvements",
    },
    {
      value: "✅ test",
      name: "✅ test:     テストの追加や既存テストの修正",
      title: "Tests",
    },
    {
      value: "🔥 remove",
      name: "🔥 remove:   コードやファイルの削除",
      title: "Removes",
    },
    {
      value: "🏗️ build",
      name: "🏗️  build:    ビルドシステムや外部依存に関する変更（スコープ例: gulp, broccoli, npm）",
      title: "Builds",
    },
    {
      value: "🔧 chore",
      name: "🔧 chore:    その他の変更（補助ツール、ドキュメント生成などの、ソースやテストの変更を含まない変更）",
      title: "Chores",
    },
    {
      value: "🚧 wip",
      name: "🚧 wip:      作業中の内容",
      title: "WIPs",
    },
  ],
  scopes: [
    { name: 'project' },
    { name: 'infra' },
    { name: 'front_end' },
    { name: 'back_end' }
  ],
  // コミットタイプによってスコープを変えたい場合は以下で指定。
  // scopeOverrides: {
  //   fix: [
  //     {name: 'infra'},
  //     {name: 'front_end'},
  //     {name: 'back_end'},
  //   ]
  // },
  messages: {
    type: "コミットタイプを選択:\n",
    scope: "変更内容のスコープ:\n",
    customScope: "変更内容のスコープ(例:コンポーネントやファイル名)(optional):\n",
    subject: "変更内容の要約:\n",
    body: '変更内容の詳細（"|"で改行）(optional):\n',
    breaking: "破壊的変更についての記述(optional):\n",
    footer: '関連issueを追記 (例:"Fix #123", " Close #123")(optional):\n',
    confirmCommit: "この内容でコミットしてよろしいですか?",
  },
  allowCustomScopes: true,
  allowBreakingChanges: ["✨ feat", "🐛 fix", "🔥 remove"],
};
