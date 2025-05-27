# GitHub Apps

## 参考元

[semantic-release と GitHub Protected Branch の共存を実現する](https://zenn.dev/wakamsha/articles/semantic-release-and-protected-branches)

> Protected Branch に対して semantic-release が差分を直接コミットするための手法を紹介します。

## 手順

1. GitHub App を作成

   - [Register new GitHub App](https://github.com/settings/apps/new)
   - GitHub App name: ユニークな名前にすること
   - Homepage URL: `http://localhost` など適当な URL で OK
   - Webhook: 使用しないのでチェックを外す
   - Permissions:
     - Repository permissions: Administration: Read and Write
     - Contents: Read and Write
     - Issues: Read and Write
     - Metadata: Read-only
     - Pull Requests: Read and Write
   - Where can this GitHub App be installed?: Only on this account

2. GitHub App をインストール

   - [GitHub Apps](https://github.com/settings/apps)
   - Edit
   - Install GitHub App
   - 左メニューの Install App
   - GitHub アカウントを選択
   - Select repositories: 対象を選択

3. App ID と秘密鍵を secrets としてリポジトリーに登録する

   - `https://github.com/settings/apps/[app-name]` にアクセスし、App ID をメモ
   - `Private keys` セクションにある `Generate a private key` ボタンを押し、秘密鍵（ pem ファイル）をダウンロード
   - 対象リポジトリの Settings > Secrets and Variables > Actions
   - 先ほど取得した値を以下のSecretとして登録
     - `SEM_RELEASE_APP_ID` : APP ID
     - `SEM_RELEASE_APP_PRIVATE_KEY` : 秘密鍵の内容

4. Branch Protection の設定を変更する

- Require a pull request before merging オプションにチェックが付いていることを確認
- Bypass list に作成したGitHub App を追加
