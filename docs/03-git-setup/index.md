# 3. 自分の名前を設定する

ファイルを編集したとき、「**誰が編集したか**」がわかるように、名前とメールアドレスを登録します。

## ターミナルを開く

「ターミナル」は、文字を打ってパソコンに命令するための画面です。
Cursorの中に入っています。

1. **Cursorを開く**
2. キーボードで **`Ctrl + `` `** を押す（Ctrlキーを押しながら、左上のバッククォートキー）
3. 画面の下にターミナルが出てきます

::: info 開かない場合
画面上のメニューから **「Terminal」→「New Terminal」** をクリックしてもOKです。
:::

## 名前とメールを登録する

ターミナルに以下を **1行ずつ** 打って、そのたびに Enter を押してください。

**① 名前を登録する（自分の名前に変えてね）：**

```bash
git config --global user.name "Taro Yamada"
```

**② メールを登録する（自分のメールに変えてね）：**

```bash
git config --global user.email "taro@masaenglishcompany.com"
```

**③ ちゃんと登録できたか確認：**

```bash
git config --global user.name
git config --global user.email
```

自分の名前とメールが表示されたら成功です！

## GitHubへの接続設定

ファイルをダウンロード/アップロードするとき、GitHubにログインが必要です。

### Windowsの人
特に何もしなくてOK。次のステップでブラウザが開いてログインを求められるので、そのときにサインインすればOKです。

### Macの人
「**パスワードの代わりのカギ**」（Personal Access Token）を作ります。

1. ブラウザで **[github.com/settings/tokens](https://github.com/settings/tokens)** を開く
2. **「Generate new token (classic)」** をクリック
3. 「Note」に **`Cursor`** と入力
4. 「Expiration」は **「No expiration」** を選ぶ
5. 「repo」に **チェック ✅** を入れる
6. 下の **「Generate token」** をクリック
7. 表示された文字列を **コピーしてメモ帳などに保存**

::: danger この文字列は大事！
表示されるのは1回だけです。必ずコピーして保存してください。
これがGitHubにログインするときの「パスワード代わり」になります。
:::

→ 次は [4. ファイルをダウンロードする](/04-clone/)
