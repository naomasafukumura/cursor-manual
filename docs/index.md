<script setup>
import { useRouter } from 'vitepress'
</script>

<style>
.top-hero {
  text-align: center;
  padding: 48px 20px 32px;
}
.top-hero h1 {
  font-size: 2.2em !important;
  font-weight: 800 !important;
  color: var(--me-text-heading) !important;
  border: none !important;
  margin-bottom: 8px !important;
  padding-bottom: 0 !important;
}
.top-hero .tagline {
  color: var(--me-text-body);
  font-size: 15px;
  line-height: 1.8;
  max-width: 560px;
  margin: 0 auto;
}
.top-steps {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 12px;
  margin: 24px 0;
}
.top-steps a {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  border: 1px solid var(--me-border);
  border-radius: var(--me-radius-sm);
  text-decoration: none !important;
  color: var(--me-text-heading) !important;
  font-weight: 600;
  font-size: 14px;
  transition: border-color 0.2s, box-shadow 0.2s;
}
.top-steps a:hover {
  border-color: var(--vp-c-brand-1);
  box-shadow: var(--me-shadow-md);
}
.top-steps .num {
  width: 28px;
  height: 28px;
  background: var(--vp-c-brand-1);
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 700;
  flex-shrink: 0;
}
.top-section {
  margin-top: 36px;
}
.top-section h2 {
  border-top: none !important;
  margin-top: 0 !important;
  padding-top: 0 !important;
}
</style>

<div class="top-hero">
  <h1>チーム作業マニュアル</h1>
  <p class="tagline">Cursorのターミナルから Claude Code に日本語で話しかけるだけ。<br>GitHub・Vercel と連携して、チームのファイルをみんなで安全に編集できます。</p>
</div>

<div class="top-steps">
  <a href="/01-github-setup/"><span class="num">1</span>GitHubに登録する</a>
  <a href="/02-tools-install/"><span class="num">2</span>ツールをインストールする</a>
  <a href="/03-claude-login/"><span class="num">3</span>Claude Codeにログインする</a>
  <a href="/04-invite/"><span class="num">4</span>招待を受ける</a>
  <a href="/05-clone/"><span class="num">5</span>プロジェクトをダウンロードする</a>
  <a href="/06-workflow/"><span class="num">6</span>毎日の作業方法</a>
</div>

<div class="top-section">

## 仕組み（ざっくり）

![全体の仕組み](/images/system-diagram.svg)

- **Cursor + Claude Code** = 各メンバーのパソコンでファイルを編集する。Cursorのターミナルから日本語で話しかけるだけ
- **GitHub** = チームの共有フォルダ（ネット上）。みんなの変更がここに集まる
- **Vercel** = サイトとして公開。GitHubに送ると自動で更新される
- **Neon** = データベース（データの保管場所）。[neon.com](https://neon.com/) で管理

## 毎回の作業（Claude Codeに話しかけるだけ）

| やりたいこと | Claude Codeに言うこと |
|-------------|---------------------|
| 最新にする | 「更新ある？あったら最新にして」 |
| ファイルを編集 | 「このファイルのここを直して」 |
| 変更を送る | 「コミットしてプッシュして」 |

::: tip はじめての方へ
左のサイドバーを1から順番に進めてください。わからなくなったら Slack で聞いてね！
:::

## 困ったときは

- [トラブルシューティング](/troubleshooting) でエラー対処を確認
- [用語集](/glossary) でわからない言葉を確認
- Slackで質問

</div>
