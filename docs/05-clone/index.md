# 5. プロジェクトをダウンロードする

GitHubにあるチームのファイルを、自分のパソコンにダウンロードします。
これを「**クローン**」と呼びます。**最初に1回だけ** やればOKです。

## まずGitHubでURLをコピーする

1. ブラウザで **[github.com/orgs/Masa-English/repositories](https://github.com/orgs/Masa-English/repositories)** を開く

::: info リポジトリって何があるの？
リポジトリ（ファイルの置き場所）の一覧が表示されます。各リポジトリの説明はページ上で確認できます。どれをダウンロードすればいいか分からなければ管理者に聞いてください。
:::

2. ダウンロードしたいリポジトリ（例：**kpi-dashboard**）をクリック
3. 緑色の **「Code」** ボタンをクリック
4. **「HTTPS」** が選ばれていることを確認
5. URLの右の **コピーボタン** をクリックしてコピー

## ターミナルからダウンロードする

1. ターミナルを開く（Mac：ターミナル.app、Windows：PowerShell）

2. 保存先に移動する（Documentsフォルダがおすすめ）：

```bash
cd ~/Documents
```

3. コピーしたURLを使ってダウンロード：

```bash
git clone コピーしたURLをここに貼り付け
```

例：
```bash
git clone https://github.com/Masa-English/kpi-dashboard.git
```

4. **ログインを求められたら：**
   - **Mac** → ユーザー名を入力 → パスワード欄に **Token**（`ghp_` で始まる文字列）を貼り付け
   - **Windows** → ブラウザが開くのでGitHubにサインイン

5. ダウンロードが終わったら、フォルダに移動：

```bash
cd kpi-dashboard
```

`ls` コマンドでファイル一覧が表示されればOK！

## Vercelとの紐づけ（必要なプロジェクトだけ）

Vercelにデプロイされているプロジェクトは、自分のパソコンとVercelを紐づける必要があります。
これをしないと、**APIキーの取得やデプロイ情報の確認ができません。**

::: danger 事前に必要なこと
- **Vercelのチームに招待されていること**（[ステップ4](/04-invite/) 参照）
- 招待されていなければ、先にmasaさんに「Vercelのチームに招待してください」と連絡してください
:::

### Vercel CLIをインストールする

ターミナルで以下を実行：

```bash
npm install -g vercel
```

### Vercelにログインする

```bash
vercel login
```

ブラウザが開くのでログインしてください。

### プロジェクトをVercelに紐づける

```bash
vercel link
```

以下のように聞かれます：

- **「Set up …?」** → **「Yes」**
- **「Which scope …?」** → **「MasaEnglish」** を選択（個人アカウントではなくチームを選んでください）
- **「Link to existing project?」** → **「Yes」**
- **「What's the name …?」** → リポジトリ名を入力（例：`paraphrase`）

これで紐づけ完了です！

## APIキーの設定（必要なプロジェクトだけ）

プロジェクトによっては、外部サービスのAPIキー（OpenAI、Neonなど）の設定が必要な場合があります。

フォルダの中に `.env.example` や `.env.local.example` というファイルがあれば、そのプロジェクトはAPIキーが必要です。

### 方法①：Vercelから取得する（おすすめ）

上のVercel紐づけが完了していれば、以下のコマンドだけでAPIキーを取得できます：

```bash
vercel env pull
```

`.env.local` ファイルが自動で作成されます。これで完了！

### 方法②：masaさんに聞く

Vercelを使っていないプロジェクトの場合は、手動で設定します。

1. Claude Code を起動して、以下のように伝えてください：

```
「.env.example を元に .env ファイルを作って」
```

2. `.env` ファイルが作成されます。中身は空欄やダミーの値になっています
3. **masaさんに連絡して、APIキーの値を教えてもらってください**
4. 教えてもらったら、Claude Code に以下のように伝えてください：

```
「.env の 〇〇 を △△ に変えて」
```

::: warning .env ファイルは絶対にGitHubに送らないでください
APIキーは秘密情報です。通常は自動で除外される設定になっていますが、万が一「.env をコミットしますか？」と聞かれたら **「いいえ」** を選んでください。
:::

::: info .env.example がない場合
そのプロジェクトはAPIキーの設定が不要です。そのまま作業を始めてOKです。
:::

→ 次は [6. 毎日の作業方法](/06-workflow/)
