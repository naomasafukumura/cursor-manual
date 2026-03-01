import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Cursor',
  description: 'チーム作業マニュアル — Cursor & GitHub 操作ガイド',
  lang: 'ja',
  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Noto+Sans+JP:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap', rel: 'stylesheet' }]
  ],
  themeConfig: {
    siteTitle: 'Cursor',
    nav: [
      { text: 'ホーム', link: '/' },
      { text: 'トラブルシューティング', link: '/troubleshooting' },
      { text: '用語集', link: '/glossary' }
    ],
    sidebar: [
      {
        text: '最初に1回だけやること',
        items: [
          { text: '1. GitHubに登録する', link: '/01-github-setup/' },
          { text: '2. ツールをインストールする', link: '/02-tools-install/' },
          { text: '3. Claude Codeにログインする', link: '/03-claude-login/' },
          { text: '4. 招待を受ける', link: '/04-invite/' },
          { text: '5. プロジェクトをダウンロードする', link: '/05-clone/' }
        ]
      },
      {
        text: '毎日の作業',
        items: [
          { text: '6. 毎日の作業方法', link: '/06-workflow/' }
        ]
      },
      {
        text: '付録',
        items: [
          { text: 'トラブルシューティング', link: '/troubleshooting' },
          { text: '用語集', link: '/glossary' },
          { text: 'Cursor Tips', link: '/cursor-tips' }
        ]
      }
    ],
    outline: {
      label: '目次',
      level: [2, 3]
    },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '検索', buttonAriaLabel: '検索' },
          modal: {
            noResultsText: '結果が見つかりません',
            resetButtonTitle: 'リセット',
            footer: { selectText: '選択', navigateText: '移動', closeText: '閉じる' }
          }
        }
      }
    },
    docFooter: {
      prev: '前のページ',
      next: '次のページ'
    },
    lastUpdated: {
      text: '最終更新'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Masa-English' }
    ]
  }
})
