import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: 'Rebase',
  description: 'JavaScript-first enhancement layer for the web.',
  base: '/rebase/',
  cleanUrls: true,

  themeConfig: {
    nav: [
      { text: 'Guide', link: '/getting-started' },
      { text: 'Plugins', link: '/plugins/creating-plugins' },
      { text: 'GitHub', link: 'https://github.com/intensed-dev/code' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'What is Rebase?', link: '/concepts/what-is-rebase' },
          { text: 'Why Rebase?', link: '/concepts/why-rebase' },
          { text: 'How it works', link: '/concepts/how-it-works' },
          { text: 'Getting started', link: '/getting-started' }
        ]
      },
      {
        text: 'Plugins',
        items: [
          { text: 'Creating plugins', link: '/plugins/creating-plugins' },
          { text: 'Using plugins', link: '/plugins/using-plugins' }
        ]
      },
      {
        text: 'Tutorials',
        items: [
          { text: 'Date & time', link: '/tutorials/date' },
          { text: 'Build a plugin', link: '/tutorials/custom-plugin' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/intensed-dev/code' }
    ],

    search: {
      provider: 'local'
    },

    editLink: {
      pattern: 'https://github.com/intensed-dev/rebase-docs/edit/main/docs/:path',
      text: 'Edit this page'
    },

    footer: {
      message: 'Rebase Documentation',
      copyright: 'Copyright © 2026 Rebase'
    }
  }
})
