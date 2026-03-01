# (任意) Cursorを使う場合

**Cursor（カーソル）** は、ファイルを編集するためのアプリです。
ターミナルだけでも作業はできますが、ファイルの中身を見ながら作業したい場合に便利です。

::: info これは任意です
Cursorがなくても、ターミナルから Claude Code を使えば全ての作業ができます。
ファイルをGUIで見たい・編集したい方だけインストールしてください。
:::

## Cursorをインストールする

### Macの人

1. ブラウザで **[cursor.com](https://cursor.com)** を開く
2. **「Download for Mac」** をクリック
3. ダウンロードされた `Cursor-xxx.dmg` をダブルクリック
4. 出てきたCursorのアイコンを **Applicationsフォルダにドラッグ**（放り込む）
5. Applicationsフォルダから「Cursor」をダブルクリックして開く
6. 「開いてもよろしいですか？」→ **「開く」** をクリック
7. 見た目の色を選ぶ画面 → お好みで選んで **「Continue」**
8. そのまま **「Continue」** でOK

### Windowsの人

1. ブラウザで **[cursor.com](https://cursor.com)** を開く
2. **「Download for Windows」** をクリック
3. ダウンロードされた `CursorSetup-xxx.exe` をダブルクリック
4. **「Next」→「Next」→「Install」** と進める
5. デスクトップにできた「Cursor」をダブルクリックして開く
6. 見た目の色を選ぶ画面 → お好みで選んで **「Continue」**
7. そのまま **「Continue」** でOK

## Cursorでプロジェクトを開く

1. Cursorを起動
2. **「Open project」** をクリック → プロジェクトフォルダを選んで **「開く」**
3. 「Trust the authors?」と出たら → **「Yes, I trust the authors」**

## Cursorのターミナルから Claude Code を使う

Cursorの中にもターミナルがあります。

1. 画面上のメニューから **「Terminal」→「New Terminal」** をクリック
2. 画面の下に黒い画面（ターミナル）が表示されます
3. あとは通常のターミナルと同じように `claude --dangerously-skip-permissions` で起動

## Claude Code 拡張機能を入れる（任意）

Cursorのマーケットプレイスから**Claude Code拡張機能**を入れると、ターミナルを開かなくてもClaude Codeが使えるようになります。

1. Cursorの左側にある **拡張機能アイコン**（四角が4つのマーク）をクリック
2. 検索欄に **「Claude」** と入力
3. **「Claude Code for VS Code」**（Anthropic製）が表示される → **「インストール」** をクリック

## Cursorで「複数端末エラー」が出る場合

Cursorのライセンスは同時に1台しか使えないため、別のパソコンでCursorを開いていると**エラーで操作できなくなる**ことがあります。

**対処法：**
- 他のパソコンでCursorを閉じる
- それができない場合は、**ターミナルから直接 Claude Code を使えばCursorなしでも作業できます**
