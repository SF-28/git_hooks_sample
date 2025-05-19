# Git hooks サンプル

リポジトリ作成時のサンプルリポジトリ

各種ツールにより、快適で高品質な開発環境を提供する

## 初期設定

- `git clone`
- [miseのインストール](https://mise.jdx.dev/getting-started.html#installing-mise-cli)
- 以下コマンドを実行

  ```cmd
  mise install
  pnpm install
  ```

## 各種バージョンアップ手順

- .tool-versions

  ```cmd
  # 古いパッケージを確認
  mise outdated

  # 一括更新
  mise upgrade

  # 特定のパッケージを更新
  mise use <package>@<version>
  ```

- .pre-commit-config.yaml
  - `pre-commit autoupdate`
- package.json
  - `pnpm upgrade`

## コミット方法

変更をステージし、`pnpm commit`

## ツール一覧

### [mise](https://asdf-vm.com/)

- `.tool-versions`で様々なツールをバージョン管理できる
- 作業ディレクトリごとに自動で対象バージョンを切り替えてくれる

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
- 絵文字を使いたかったので[gitmoji](https://gitmoji.dev/)を選択
