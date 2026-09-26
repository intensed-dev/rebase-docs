---
layout: home

hero:
  name: Rebase
  text: A JavaScript-first enhancement layer for the web.
  tagline: Add opt-in syntax and behavior to existing web projects without replacing your stack.
  actions:
    - theme: brand
      text: Get Started
      link: /introduction/getting-started
    - theme: alt
      text: Explore Plugins
      link: /plugins/
    - theme: alt
      text: GitHub
      link: https://github.com/intensed-dev/code

features:
  - title: Explicit by design
    details: A Rebase instance only processes syntax that has been registered. Unknown syntax stays untouched.
  - title: Built to extend
    details: Directives, blocks, expressions and hooks let plugins add focused capabilities without changing the core.
  - title: Works with your stack
    details: Rebase is an enhancement layer, not a replacement for Svelte, Vue, React or plain HTML.
  - title: Small runtime
    details: The core focuses on syntax registration, transformation, mounting and a predictable plugin API.
---

<HomeSection
  eyebrow="THE IDEA"
  title="Small extensions. Shared syntax."
  description="Rebase gives reusable web features a common extension point."
/>

<HomeSection
  eyebrow="DEVELOPERS"
  title="From first render to plugin development."
  description="Follow the documentation from fundamentals through integrations and the API reference."
/>

[Get started](/introduction/getting-started) · [Learn the architecture](/guide/overview) · [Find plugins](/plugins/) · [Read the reference](/reference/core)

## A small extension layer

A date formatter, icon system or project-specific directive does not need to become a framework.

Register it with Rebase and keep it as an independent plugin:

```js
const rebase = createRebase();

rebase.use(date);

await rebase.transform("{@date as DD.MM.YYYY}");
```
