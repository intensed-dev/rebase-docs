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

<HomeSection eyebrow="THE IDEA" title="Small extensions. Shared syntax." description="Rebase gives reusable web features a common extension point.">
  <div class="home-copy">
    <p>A date formatter, icon system or project-specific directive does not need to become a framework. Register it with Rebase and keep it as an independent plugin.</p>
    <div class="home-code">
      <pre><code>const rebase = createRebase()

rebase.use(date)

await rebase.transform(
  '{@date as DD.MM.YYYY}'
)</code></pre>
    </div>
  </div>
</HomeSection>

<HomeSection eyebrow="DEVELOPERS" title="From first render to plugin development." description="Follow the documentation from fundamentals through integrations and the API reference.">
  <div class="home-links">
    <a href="/introduction/getting-started"><strong>Get started</strong><span>Create an instance and render your first directive.</span></a>
    <a href="/guide/overview"><strong>Learn the architecture</strong><span>Understand instances, registries, hosts and rendering.</span></a>
    <a href="/plugins/"><strong>Find plugins</strong><span>Browse official and community extensions.</span></a>
    <a href="/reference/core"><strong>Read the reference</strong><span>Build integrations against the public API.</span></a>
  </div>
</HomeSection>
