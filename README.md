# Git hooks サンプル

リポジトリ作成時のサンプルリポジトリ

各種ツールにより、快適で高品質な開発環境を提供する

## 初期設定

- `git clone`
- [asdfのインストール](https://asdf-vm.com/guide/getting-started.html)
- 以下コマンドを実行

  ```cmd
  asdf plugin add nodejs
  asdf plugin add pre-commit
  asdf install
  yarn install
  ```

## コミット方法

変更をステージし、`yarn commit`

## ツール一覧

### [asdf](https://asdf-vm.com/)

- `.tool-versions`で様々なツールをバージョン管理できる
- 作業ディレクトリごとに自動で対象バージョンを切り替えてくれる

### [pre-commit](https://pre-commit.com/)

- `.pre-commit-config.yaml`で各種hooksを一元管理できる
- 静的解析やフォーマッタ、セキュリティ検査などをコミット前に自動実行
- [Supported hooks](https://pre-commit.com/hooks.html)から欲しいものを追加
  - 各種hooksの設定はそれぞれのリポジトリを参照

### [commitizen](https://github.com/commitizen/cz-cli) + [cz-customizable](https://github.com/leoforfree/cz-customizable#steps)

- `.cz_config.js` で設定したコミットメッセージを対話的に作成できる

### [commitlint](https://commitlint.js.org/#/) + [commitlint-config-gitmoji](https://github.com/arvinxx/gitmoji-commit-workflow/tree/master/packages/commitlint-config)

- `commitlint.config.js`でコミットメッセージのフォーマットを指定
- 上記フォーマットに当てはまらなければ、エラーとしてコミットを止めてくれる
- 絵文字を使いたかったので[gitmoji](https://gitmoji.dev/)を選択

aa
