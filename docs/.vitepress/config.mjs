import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Cursor マニュアル',
  description: 'Masa English チーム向け Cursor & GitHub 操作ガイド',
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
          { text: 'このマニュアルについて', link: '/' }
        ]
      },
      {
        text: 'セットアップ',
        items: [
          { text: '1. Cursorのインストール', link: '/01-cursor-install/' },
          { text: '2. GitHubアカウント作成', link: '/02-github-setup/' },
          { text: '3. Gitの初期設定', link: '/03-git-setup/' },
          { text: '4. リポジトリをクローン', link: '/04-clone/' }
        ]
      },
      {
        text: '日常の操作',
        items: [
          { text: '5. ブランチを作成する', link: '/05-branch/' },
          { text: '6. ファイルを編集・保存', link: '/06-edit-save/' },
          { text: '7. コミット & プッシュ', link: '/07-commit-push/' },
          { text: '8. プルリクエスト', link: '/08-pull-request/' }
        ]
      },
      {
        text: '応用',
        items: [
          { text: '9. Claude Codeの使い方', link: '/09-claude-code/' }
        ]
      },
      {
        text: '付録',
        items: [
          { text: '用語集', link: '/glossary' }
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
