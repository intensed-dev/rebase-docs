---
layout: home

hero:
  name: Rebase
  text: A JavaScript-first enhancement layer for the web.
  tagline: Add opt-in syntax and behavior to existing web projects without replacing your stack.
  actions:
    - theme: brand
      text: Get Started
      link: /getting-started
    - theme: alt
      text: How it works
      link: /concepts/how-it-works
    - theme: alt
      text: GitHub
      link: https://github.com/intensed-dev/code

features:
  - title: Non-invasive
    details: Rebase only processes syntax registered by the active Rebase instance. Existing framework syntax stays in control.
  - title: JavaScript-first
    details: The runtime and plugin API are written in JavaScript and can be used directly from web applications.
  - title: Plugin-based
    details: Features are opt-in. Dates, icons, localization and other capabilities can live in independent plugins.
  - title: Framework-friendly
    details: Rebase can run alongside HTML, Svelte, Vue, React and other stacks through host-aware adapters.
  - title: Small core
    details: The core focuses on parsing registered extensions, rendering them and providing a predictable plugin API.
  - title: Open source
    details: Rebase is developed openly and is designed to be extended by both official and community plugins.
---

## Rebase in one sentence

**Rebase adds an explicit extension layer to web markup.**

Instead of building another complete UI framework, Rebase lets applications register small pieces of syntax and behavior:

~~~html
{@date as DD.MM.YYYY}

{#feature}
  <p>Plugin-provided content.</p>
{/feature}
~~~

The important part is that these names are not magically reserved by Rebase. A Rebase instance only owns syntax that has been registered with it.

## Start here

- [What is Rebase?](/concepts/what-is-rebase)
- [Why use Rebase?](/concepts/why-rebase)
- [How it works](/concepts/how-it-works)
- [Getting started](/getting-started)
- [Creating plugins](/plugins/creating-plugins)
- [Using plugins](/plugins/using-plugins)
- [Plugin tutorials](/tutorials/date)
