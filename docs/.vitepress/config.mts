import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: 'Rebase',
  description: 'JavaScript-first enhancement layer for the web.',
  base: '/rebase/',
  cleanUrls: true,

  themeConfig: {
    nav: [
      {
        text: 'JS.ORG',
        link: 'https://rebase.js.org'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/js-rebase/code'
      },
      {
        text: 'Source',
        link: 'https://github.com/js-rebase/rebase'
      }
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
        text: 'Developer Guide',
        items: [
          { text: 'Syntax', link: '/guide/syntax' },
          { text: 'Architecture', link: '/guide/architecture' },
          { text: 'API Reference', link: '/guide/api' }
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
      {
        icon: 'github',
        link: 'https://github.com/js-rebase'
      },
      {
        icon: 'javascript',
        link: 'https://rebase.js.org'
      }
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
