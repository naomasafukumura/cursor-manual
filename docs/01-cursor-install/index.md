# 1. Cursorのインストール

Cursor（カーソル）は、AIが搭載されたコードエディタです。
このマニュアルでは、Cursorを使ってファイルの編集やGitHub との連携を行います。

## Mac の場合

### 手順

1. **Cursorの公式サイトにアクセス**
   ブラウザで [https://cursor.com](https://cursor.com) を開きます

   <!-- ![Cursor公式サイト](/images/01-cursor-install/cursor-website-mac.png) -->
   ::: tip スクリーンショット
   📸 ここにCursor公式サイトのスクリーンショットが入ります
   :::

2. **「Download」ボタンをクリック**
   トップページの「Download for Mac」ボタンをクリックします

3. **ダウンロードされたファイルを開く**
   `Cursor-xxx.dmg` というファイルがダウンロードされるので、ダブルクリックで開きます

4. **アプリケーションフォルダにドラッグ**
   Cursorのアイコンを「Applications」フォルダにドラッグ＆ドロップします

   <!-- ![ドラッグ＆ドロップ](/images/01-cursor-install/drag-to-applications.png) -->
   ::: tip スクリーンショット
   📸 ここにドラッグ＆ドロップのスクリーンショットが入ります
   :::

5. **Cursorを起動**
   アプリケーションフォルダから「Cursor」をダブルクリックして起動します

6. **初回起動時の設定**
   - 「開いてもよろしいですか？」→ **「開く」** をクリック
   - テーマの選択 → お好みのテーマを選んで **「Continue」**
   - 拡張機能のインストール → そのまま **「Continue」** でOK

## Windows の場合

### 手順

1. **Cursorの公式サイトにアクセス**
   ブラウザで [https://cursor.com](https://cursor.com) を開きます

2. **「Download」ボタンをクリック**
   トップページの「Download for Windows」ボタンをクリックします

3. **ダウンロードされたファイルを実行**
   `CursorSetup-xxx.exe` というファイルがダウンロードされるので、ダブルクリックで実行します

   ::: tip スクリーンショット
   📸 ここにWindows版インストーラーのスクリーンショットが入ります
   :::

4. **インストールウィザードに従う**
   - 利用規約に同意 → **「Next」**
   - インストール先はデフォルトのまま → **「Next」**
   - **「Install」** をクリック

5. **Cursorを起動**
   デスクトップまたはスタートメニューから「Cursor」を起動します

6. **初回起動時の設定**
   - テーマの選択 → お好みのテーマを選んで **「Continue」**
   - 拡張機能のインストール → そのまま **「Continue」** でOK

## Cursorのコマンドをターミナルから使えるようにする（Mac のみ）

後の手順で便利になるため、`cursor` コマンドをターミナルから使えるようにしておきます。

1. Cursorを起動した状態で、キーボードの **`Cmd + Shift + P`** を押す
2. 表示された入力欄に **`Shell Command`** と入力
3. **「Shell Command: Install 'cursor' command in PATH」** をクリック

::: tip スクリーンショット
📸 ここにShell Command設定のスクリーンショットが入ります
:::

::: info 確認方法
ターミナルで `cursor --version` と入力してバージョンが表示されればOKです
:::

## 次のステップ

Cursorのインストールが完了したら、次は [GitHubアカウントの作成](/02-github-setup/) に進みましょう。
