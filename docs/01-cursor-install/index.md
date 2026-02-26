# 1. Cursorを入れる

**Cursor（カーソル）** は、ファイルを編集するためのアプリです。
この中でAI（Claude Code）を使って作業します。

## Macの人

1. ブラウザで **[cursor.com](https://cursor.com)** を開く
2. **「Download for Mac」** をクリック
3. ダウンロードされた `Cursor-xxx.dmg` をダブルクリック
4. Cursorのアイコンを **Applicationsフォルダにドラッグ**
5. Applicationsフォルダから Cursor を開く
6. 「開いてもよろしいですか？」→ **「開く」**
7. テーマを選んで **「Continue」** → そのまま **「Continue」** でOK

## Windowsの人

1. ブラウザで **[cursor.com](https://cursor.com)** を開く
2. **「Download for Windows」** をクリック
3. ダウンロードされた `CursorSetup-xxx.exe` をダブルクリック
4. **「Next」→「Next」→「Install」**
5. デスクトップの「Cursor」を開く
6. テーマを選んで **「Continue」** → そのまま **「Continue」** でOK

## Claude Code を入れる

Cursorを開いたら、AIアシスタント（Claude Code）を入れます。

1. Cursorで **`Ctrl + `` `** を押す（画面下にターミナルが出る）
2. 以下を打って Enter：
   ```bash
   npm install -g @anthropic-ai/claude-code
   ```
3. 終わったら以下を打って Enter（ログイン）：
   ```bash
   claude
   ```
4. 「Google アカウントでログイン」を選んでサインイン

::: warning npm が見つからないと言われたら
先に [Node.js](https://nodejs.org/) の「LTS」版をインストールしてください。
:::

::: info これで完了！
Cursorが開けて、Claude Code が使えればOKです。
:::

→ 次は [2. GitHubに登録する](/02-github-setup/)
