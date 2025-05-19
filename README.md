# Git hooks サンプル

リポジトリ作成時のサンプルリポジトリ

各種ツールにより、快適で高品質な開発環境を提供する

## 初期設定

```sh
# git cloone
git clone https://github.com/SF-28/git_hooks_sample <dist>
# or copier copy
copier copy https://github.com/SF-28/git_hooks_sample <dist>

cd <dist>
mise install
pnpm install
```

## コミット方法

変更をステージし、`pnpm commit`

## 各種バージョンアップ手順

```sh
# mise
mise outdated # 最新版を確認
mise upgrade  # 全て更新する場合
mise use <package>@<version> # 特定のパッケージを更新する場合

# pre-commit
pre-commit autoupdate

# pnpm
pnpm upgrade
```

## ツール一覧

### [mise](https://mise.jdx.dev/)

- [インストール](https://mise.jdx.dev/getting-started.html#installing-mise-cli)
- `mise.toml` で様々なツールをバージョン管理できる
- 作業ディレクトリごとに自動で対象バージョンを切り替えてくれる
  - asdf の `.tool-versions` にも対応

### [pre-commit](https://pre-commit.com/)

- `.pre-commit-config.yaml`で各種hooksを一元管理できる
- 静的解析やフォーマッタ、セキュリティ検査などをコミット前に自動実行
- [Supported hooks](https://pre-commit.com/hooks.html)から欲しいものを追加
  - 各種hooksの設定はそれぞれのリポジトリを参照
- [Sourcegraph](https://sourcegraph.com/search)から人気のhooksを探すことができる
  - Pythonファイルに対するhooks [`file:^\.pre-commit-hooks\.yaml$ "types: [python]"`](https://sourcegraph.com/search?q=file:^\.pre-commit-hooks\.yaml$%20%22types:%20[go]%22)

### [commitizen](https://github.com/commitizen/cz-cli) + [cz-customizable](https://github.com/leoforfree/cz-customizable#steps)

- `.cz_config.js` で設定したコミットメッセージを対話的に作成できる

### [commitlint](https://commitlint.js.org/#/) + [commitlint-config-gitmoji](https://github.com/arvinxx/gitmoji-commit-workflow/tree/master/packages/commitlint-config)

- `commitlint.config.js`でコミットメッセージのフォーマットを指定
- 上記フォーマットに当てはまらなければ、エラーとしてコミットを止めてくれる
- 絵文字を使いたかったので [gitmoji](https://gitmoji.dev/) を選択

### [semantic-release](https://semantic-release.gitbook.io/semantic-release/) + [semantic-release-changelog]

- コミットに応じて自動でバージョンを上げてくれる
- `package.json`のversionタグ, Tag, Releases, Changelog などを自動で更新してくれる

### [copier](https://copier.readthedocs.io/en/stable/)

- テンプレートをプロジェクトに適用するツール
- 本リポジトリのツール群も copier を使って適用することができる
  - `copier copy https://github.com/SF-28/git_hooks_sample <dist>`
