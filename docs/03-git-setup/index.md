# 3. Gitの初期設定

Git（ギット）は、ファイルの変更履歴を管理するためのツールです。
Cursorのターミナルを使って、最初に1回だけ設定を行います。

## ターミナルを開く

Cursorの中には「ターミナル」という、コマンドを入力する画面があります。

### 手順

1. **Cursorを起動**します

2. **ターミナルを開く**
   - Mac：**`Ctrl + `` `**（Controlキー + バッククォート）
   - Windows：**`Ctrl + `` `**（Controlキー + バッククォート）
   - または、メニューバーの **「Terminal」→「New Terminal」**

   ::: tip スクリーンショット
   📸 ここにターミナルを開いた画面のスクリーンショットが入ります
   :::

## ユーザー名とメールアドレスを設定する

ターミナルに以下のコマンドを **1行ずつ** 入力して、Enterキーを押します。

### 手順

1. **ユーザー名を設定**
   以下のコマンドを入力して Enter を押します（`あなたの名前` の部分を自分の名前に変えてください）

   ```bash
   git config --global user.name "あなたの名前"
   ```

   **例：**
   ```bash
   git config --global user.name "Taro Yamada"
   ```

2. **メールアドレスを設定**
   以下のコマンドを入力して Enter を押します（メールアドレスを自分のものに変えてください）

   ```bash
   git config --global user.email "あなたのメール@masaenglishcompany.com"
   ```

   **例：**
   ```bash
   git config --global user.email "taro@masaenglishcompany.com"
   ```

::: tip スクリーンショット
📸 ここにgit config実行後のスクリーンショットが入ります
:::

## 設定を確認する

正しく設定できたか確認しましょう。

```bash
git config --global user.name
git config --global user.email
```

自分の名前とメールアドレスが表示されればOKです。

## GitHub との認証設定

リポジトリをクローン（ダウンロード）するとき、GitHubへのログインが求められます。
初回のみ以下の手順で認証を行います。

### Mac の場合

1. ターミナルで以下のコマンドを実行：
   ```bash
   git credential-store
   ```
2. 次の手順（クローン）で GitHub のユーザー名・パスワードを求められたら入力します
3. パスワードの代わりに **Personal Access Token** を使います（後述）

### Windows の場合

Windows では Git をインストールすると **Git Credential Manager** が自動で入るため、特別な設定は不要です。
クローン時にブラウザが開いて GitHub にログインを求められるので、サインインすればOKです。

### Personal Access Token の作り方

GitHub のパスワードの代わりに使う「トークン」を作成します。

1. GitHubにログインした状態で [https://github.com/settings/tokens](https://github.com/settings/tokens) にアクセス
2. **「Generate new token (classic)」** をクリック
3. **Note** に「Cursor」と入力
4. **Expiration** を「No expiration」に設定（※ セキュリティ上90日推奨）
5. **Select scopes** で **「repo」** にチェック ✅
6. **「Generate token」** をクリック
7. 表示されたトークンを **コピーして安全な場所に保存**（⚠️ 一度しか表示されません！）

::: tip スクリーンショット
📸 ここにPersonal Access Token作成画面のスクリーンショットが入ります
:::

::: danger 重要
トークンはパスワードと同じです。他の人に共有しないでください。
:::

## 次のステップ

Gitの初期設定が完了したら、次は [リポジトリをクローン](/04-clone/) に進みましょう。
