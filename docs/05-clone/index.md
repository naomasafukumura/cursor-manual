# 5. ファイルをダウンロードする

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
5. URLの右の **📋ボタン** をクリックしてコピー

## CursorのClone repoでダウンロードする

1. **Cursorを開く**（すでにプロジェクトが開いている場合は、一度閉じてスタート画面を表示してください）

2. スタート画面の **「Clone repo」** をクリック

   ::: info どこにあるの？
   スタート画面の上に「Open project」「**Clone repo**」「Connect via SSH」の3つのボタンがあります。真ん中です。
   :::

3. 上に出てくる入力欄に、**さっきコピーしたURLを貼り付け** て Enter

4. **保存先を選ぶ画面** が出ます → 「Documents」フォルダを選んで **「Select as Repository Destination」**

5. **ログインを求められたら：**
   - **Mac** → ユーザー名を入力 → パスワード欄に **Token**（`ghp_` で始まる文字列）を貼り付け
   - **Windows** → ブラウザが開くのでGitHubにサインイン

6. ダウンロードが終わると、Cursorでファイルが自動で開きます

7. 「Trust the authors?」と出たら → **「Yes, I trust the authors」**

左側にファイルの一覧が出ればOK！

## 2回目以降はもっと簡単

Cursorを開くと **「Recent projects」** に表示されるので、**クリックするだけ** で開けます。

→ 次は [6. 毎日の作業方法](/06-workflow/)
