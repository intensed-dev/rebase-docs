import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: 'Rebase',
  description: 'JavaScript-first enhancement layer for the web.',
  base: '/rebase/',
  cleanUrls: true,

  themeConfig: {
    logo: 'https://raw.githubusercontent.com/js-rebase/branding/207e009036453b4f367a1ba9d8925361571153a0/assets/full_logo.svg',

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
          { text: 'Overview', link: '/introduction/overview' },
          { text: 'Getting started', link: '/introduction/getting-started' },
          { text: 'Why Rebase?', link: '/introduction/why-rebase' }
        ]
      },
      {
        text: 'Guide',
        items: [
          { text: 'Core concepts', link: '/guide/overview' },
          {
            text: 'Syntax',
            items: [
              { text: 'Directives', link: '/guide/syntax/directives' },
              { text: 'Blocks', link: '/guide/syntax/blocks' },
              { text: 'Expressions', link: '/guide/syntax/expressions' },
              { text: 'Escaping & HTML', link: '/guide/syntax/escaping' }
            ]
          },
          {
            text: 'Rendering',
            items: [
              { text: 'Transforming source', link: '/guide/rendering/transform' },
              { text: 'Mounting', link: '/guide/rendering/mounting' },
              { text: 'Hooks', link: '/guide/rendering/hooks' }
            ]
          }
        ]
      },
      {
        text: 'Plugins',
        items: [
          { text: 'Overview', link: '/plugins/overview' },
          { text: 'Directive plugins', link: '/plugins/directives' },
          { text: 'Block plugins', link: '/plugins/blocks' },
          { text: 'Publishing', link: '/plugins/publishing' }
        ]
      },
      {
        text: 'Integrations',
        items: [
          { text: 'Svelte', link: '/integrations/svelte' },
          { text: 'Vue', link: '/integrations/vue' },
          { text: 'React', link: '/integrations/react' }
        ]
      },
      {
        text: 'Reference',
        items: [
          { text: 'Core exports', link: '/reference/core' },
          { text: 'Rebase instance', link: '/reference/rebase' },
          { text: 'SyntaxRegistry', link: '/reference/syntax-registry' },
          { text: 'Plugin API', link: '/reference/plugin-api' }
        ]
      },
      {
        text: 'Tutorials',
        items: [
          { text: 'Date & time', link: '/tutorials/date' },
          { text: 'Build a plugin', link: '/tutorials/build-a-plugin' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/js-rebase' },
      { icon: 'javascript', link: 'https://rebase.js.org' }
    ],

    search: {
      provider: 'local'
    },

    editLink: {
      pattern: 'https://github.com/js-rebase/rebase-docs/edit/main/docs/:path',
      text: 'Edit this page'
    },

    footer: {
      message: 'Made by the Rebase Team',
      copyright: 'Copyright © 2026 Rebase'
    }
  }
})
