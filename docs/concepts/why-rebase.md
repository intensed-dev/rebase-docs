# Why use Rebase?

Not every small web feature needs to become part of a framework abstraction.

A project may need reusable behavior such as date formatting, icon rendering, localization, a project-specific directive or a small generated block.

## A middle layer

Rebase provides a small extension layer between application code and markup:

```
application
    ↓
Rebase syntax
    ↓
plugin
    ↓
HTML / application behavior
```

The plugin remains opt-in and the core does not need to know what the feature means.

## Explicit instead of global

Plugins are explicitly supplied to an instance:

```js
const rebase = createRebase({
  plugins: [date]
});
```

Rebase does not scan a project and activate arbitrary plugins.

## Frameworks remain useful

A Svelte, Vue or React application can keep using its existing framework while adding small Rebase extensions.

For example, a Svelte integration can protect Svelte's own block syntax while still allowing registered Rebase directives.

## When Rebase is not the right tool

Use your existing framework for component lifecycles, routing, state systems and other framework-specific capabilities. Rebase is most useful as a small, explicit extension mechanism.
