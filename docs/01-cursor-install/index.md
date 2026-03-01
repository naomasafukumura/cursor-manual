# 1. Cursorを入れる

**Cursor（カーソル）** は、ファイルを編集するためのアプリです。
WordやGoogleドキュメントのようなものだと思ってください。

## Macの人

1. ブラウザで **[cursor.com](https://cursor.com)** を開く
2. **「Download for Mac」** をクリック
3. ダウンロードされた `Cursor-xxx.dmg` をダブルクリック
4. 出てきたCursorのアイコンを **Applicationsフォルダにドラッグ**（放り込む）
5. Applicationsフォルダから「Cursor」をダブルクリックして開く
6. 「開いてもよろしいですか？」→ **「開く」** をクリック
7. 見た目の色を選ぶ画面 → お好みで選んで **「Continue」**
8. そのまま **「Continue」** でOK

## Windowsの人

1. ブラウザで **[cursor.com](https://cursor.com)** を開く
2. **「Download for Windows」** をクリック
3. ダウンロードされた `CursorSetup-xxx.exe` をダブルクリック
4. **「Next」→「Next」→「Install」** と進める
5. デスクトップにできた「Cursor」をダブルクリックして開く
6. 見た目の色を選ぶ画面 → お好みで選んで **「Continue」**
7. そのまま **「Continue」** でOK

## Gitを入れる

CursorでファイルをGitHubと同期するには「Git」が必要です。

### Macの人

Macには通常Gitが入っていますが、**新しいMacや初期化したMacでは入っていないことがあります。**

まずターミナルで確認してみてください：

```bash
git --version
```

- バージョンが表示された → **そのままでOK、次のステップへ進んでください**
- 「xcode-select: note: No developer tools were found」と出た → **以下の手順でインストールしてください**

**インストール手順：**

1. ターミナルで以下を実行：

```bash
xcode-select --install
```

2. macOSのポップアップが表示されます → **「インストール」** をクリック
3. 利用規約に **「同意する」** をクリック
4. インストールが完了するまで待つ（数分かかります）

::: tip ポップアップが見つからない場合
デスクトップの他のウィンドウの後ろに隠れていることがあります。
**Dockのバー**や **Mission Control（3本指で上にスワイプ）** で確認してみてください。
:::

5. 完了したら確認：

```bash
git --version
```

`git version 2.xx.x` と表示されれば成功です！

### Windowsの人

1. ブラウザで **[git-scm.com](https://git-scm.com)** を開く
2. **「Download for Windows」** をクリック
3. ダウンロードされたファイルを開いてインストール（全部「Next」でOK）

::: info 確認
Cursorが開ければこのステップは完了です！
:::

→ 次は [2. GitHubに登録する](/02-github-setup/)
