# Creating plugins

A Rebase plugin is a JavaScript module that receives a Rebase API and registers capabilities.

## Smallest plugin

```js
export default rebase => {
  rebase.directive("hello", ({ expression }) => {
    return `<strong>Hello ${expression}</strong>`;
  });
};
```

## Plugin objects

For metadata and an explicit install method:

```js
export default {
  name: "rebase-hello",

  install(rebase) {
    rebase.directive("hello", ({ expression }) => {
      return `<strong>Hello ${expression}</strong>`;
    });
  }
};
```

Both forms are supported.

## Directives

```js
rebase.directive("uppercase", ({ expression }) =>
  expression.toUpperCase()
);
```

## Blocks

```js
rebase.block("feature", ({ body }) =>
  `<section class="feature">${body}</section>`
);
```

Usage:

```html
{#feature}
  <p>Plugin content</p>
{/feature}
```

## Hooks

Plugins can observe render events:

```js
rebase.hook("render", ({ root }) => {
  console.log("Rendered", root);
});
```

## Plugin options

A plugin function can accept an options object when installed explicitly:

```js
export default (rebase, options = {}) => {
  const prefix = options.prefix ?? "app";

  rebase.directive("id", ({ expression }) =>
    `${prefix}-${expression}`
  );
};
```

Use `rebase.use(plugin, options)` when options are needed:

```js
const rebase = createRebase();
rebase.use(plugin, { prefix: "site" });
```

The constructor's `plugins` option is intended for plugin values that do not require separate installation options.

## Plugin design rules

Good plugins should:

- register only the syntax they own
- avoid global state
- keep their public API small
- document supported Rebase versions
- provide tests
- escape generated HTML when input can be user-controlled

The core should not need plugin-specific code.
