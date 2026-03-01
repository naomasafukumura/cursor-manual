---
layout: home

hero:
  name: Cursor
  text: チーム作業マニュアル
  tagline: Cursorのターミナルから Claude Code に日本語で話しかけるだけ。GitHub・Vercel と連携して、チームのファイルをみんなで安全に編集できます。
  actions:
    - theme: brand
      text: はじめる →
      link: /01-github-setup/
    - theme: alt
      text: 毎日の作業方法
      link: /06-workflow/

features:
  - icon: 🔧
    title: 1. GitHubに登録する
    details: アカウントを作成して、チームの共有フォルダにアクセスできるようにします。
    link: /01-github-setup/
  - icon: 📦
    title: 2. ツールをインストールする
    details: Cursor・Git・Node.js・Claude Code をインストール。10分で完了します。
    link: /02-tools-install/
  - icon: 🔑
    title: 3. Claude Codeにログインする
    details: AIアシスタントにログインして、動作確認。1回やれば次からは自動です。
    link: /03-claude-login/
  - icon: ✉️
    title: 4. 招待を受ける
    details: GitHub と Vercel のチームに参加して、プロジェクトにアクセスできるようにします。
    link: /04-invite/
  - icon: ⬇️
    title: 5. プロジェクトをダウンロードする
    details: git clone でチームのファイルを自分のパソコンに。Vercel紐づけやAPIキー設定も。
    link: /05-clone/
  - icon: 🔄
    title: 6. 毎日の作業方法
    details: 「更新ある？」→「ここを直して」→「コミットしてプッシュして」の3つだけ。
    link: /06-workflow/
---

## 仕組み（ざっくり）

![全体の仕組み](/images/system-diagram.svg)

- **Cursor + Claude Code** = 各メンバーのパソコンでファイルを編集する。Cursorのターミナルから日本語で話しかけるだけ
- **GitHub** = チームの共有フォルダ（ネット上）。みんなの変更がここに集まる
- **Vercel** = サイトとして公開。GitHubに送ると自動で更新される
- **Neon** = データベース（データの保管場所）。[neon.com](https://neon.com/) で管理

## 毎回の作業（Claude Codeに話しかけるだけ）

| やりたいこと | Claude Codeに言うこと |
|-------------|---------------------|
| 最新にする | 「更新ある？あったら最新にして」 |
| ファイルを編集 | 「このファイルのここを直して」 |
| 変更を送る | 「コミットしてプッシュして」 |

::: tip はじめての方へ
上のカードを1から順番に進めてください。わからなくなったら Slack で聞いてね！
:::

## 困ったときは

- [トラブルシューティング](/troubleshooting) でエラー対処を確認
- [用語集](/glossary) でわからない言葉を確認
- Slackで質問
