import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'チーム作業マニュアル',
  description: 'Masa English チーム向け ターミナル & GitHub 操作ガイド',
  lang: 'ja',
  themeConfig: {
    nav: [
      { text: 'ホーム', link: '/' },
      { text: '用語集', link: '/glossary' }
    ],
    sidebar: [
      {
        text: 'はじめに',
        items: [
          { text: 'トップページ', link: '/' }
        ]
      },
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
          { text: '(任意) Cursorを使う場合', link: '/cursor-option' }
        ]
      }
    ],
    outline: {
      label: '目次'
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
    }
  }
})
