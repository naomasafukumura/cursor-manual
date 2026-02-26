# 4. ファイルをダウンロードする

チームのファイルを、自分のパソコンにダウンロードします。
これを「**クローン**」と呼びます（コピーを作るイメージ）。

## ダウンロード用のURLをコピーする

1. ブラウザで以下のページを開く：
   **https://github.com/Masa-English/Masa-English**

2. 緑色の **「Code」** ボタンをクリック
3. **「HTTPS」** が選ばれていることを確認
4. URLの右の **📋ボタン** をクリックしてコピー

## Cursorでダウンロードする

1. **Cursorを開く**
2. **`Ctrl + `` `** でターミナルを開く
3. 以下を打って Enter（ファイルの保存場所に移動）：

   **Macの人：**
   ```bash
   cd ~/Documents
   ```

   **Windowsの人：**
   ```bash
   cd C:\Users\あなたのユーザー名\Documents
   ```

4. 以下を打って Enter（ダウンロード開始）：
   ```bash
   git clone https://github.com/Masa-English/Masa-English.git
   ```

5. **ログインを求められたら：**
   - **Mac** → ユーザー名を入れて、パスワード欄には**さっき作ったトークン**を貼り付け
   - **Windows** → ブラウザが開くのでGitHubにサインイン

6. `done.` と出たら成功！

## ダウンロードしたフォルダをCursorで開く

1. Cursorのメニュー → **「File」** → **「Open Folder...」**
2. Documentsフォルダの中にできた **「Masa-English」** フォルダを選んで **「Open」**
3. 「Trust the authors?」と出たら → **「Yes, I trust the authors」**

左側にファイルの一覧が出ればOK！

→ 次は [5. 作業スペースを作る](/05-branch/)
