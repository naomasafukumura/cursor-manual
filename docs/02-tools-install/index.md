# 2. ツールをインストールする

作業に必要な3つのツール（**Git**・**Node.js**・**Claude Code**）をインストールします。

## まずターミナルを開く

ターミナルは、文字を打ってパソコンに命令する画面です。

- **Mac** → 「ターミナル.app」を開く（Spotlight検索で「ターミナル」と入力すると見つかります）
- **Windows** → 「PowerShell」を開く（スタートメニューで「PowerShell」と検索）

::: tip ターミナルが見つからない？
- **Mac**：Finder → アプリケーション → ユーティリティ → ターミナル
- **Windows**：スタートボタンを右クリック → 「Windows PowerShell」
:::

## ① Gitを入れる

Git はファイルの変更履歴を記録するツールです。

### Macの人

Macには通常Gitが入っていますが、**新しいMacや初期化したMacでは入っていないことがあります。**

ターミナルで確認してみてください：

```bash
git --version
```

- バージョンが表示された → **そのままでOK、次へ進んでください**
- 「xcode-select: note: No developer tools were found」と出た → **以下の手順でインストール**

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
**Dockのバー** や **Mission Control（3本指で上にスワイプ）** で確認してみてください。
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

## ② Node.js を入れる

Claude Codeを動かすのに必要なソフトです。

### Macの人

1. ブラウザで **[nodejs.org](https://nodejs.org/)** を開く
2. **「Node.jsを入手」** ボタンをクリック
3. ダウンロードページが開くので、**「macOS インストーラー (.pkg)」** をクリック
4. ダウンロードされたファイルを開いてインストール（全部「続ける」でOK）

### Windowsの人

1. ブラウザで **[nodejs.org](https://nodejs.org/)** を開く
2. **「Node.jsを入手」** ボタンをクリック
3. ダウンロードページが開くので、**「Windows インストーラー (.msi)」** をクリック
4. ダウンロードされたファイルを開いてインストール（全部「Next」でOK）

## ③ Claude Code をインストールする

ターミナルに以下をコピー＆ペーストして **Enter** を押す：

```bash
npm install -g @anthropic-ai/claude-code
```

いろいろ文字が流れて、最後にエラーが出なければOK！

::: warning Macで「permission denied」エラーが出た場合
以下のようなエラーが出ることがあります：

```
npm error Error: EACCES: permission denied
```

**方法①（かんたん）：** 先頭に `sudo` をつけて再実行

```bash
sudo npm install -g @anthropic-ai/claude-code
```

パスワードを聞かれたら、**Macのログインパスワード** を入力して Enter を押してください（入力中は画面に何も表示されませんが、正常です）。

**方法②（sudoでもダメな場合）：** npmの保存先を変更

以下の3行をターミナルにコピー＆ペーストして実行してください：

```bash
mkdir -p ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH="$HOME/.npm-global/bin:$PATH"' >> ~/.zshrc
```

実行したら、**ターミナルを一度閉じて開き直してから**、もう一度インストールしてください：

```bash
npm install -g @anthropic-ai/claude-code
```
:::

→ 次は [3. Claude Codeにログインする](/03-claude-login/)
