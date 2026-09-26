# API reference

This page documents the public core API.

## `createRebase(options)`

Creates a new Rebase instance.

```js
const rebase = createRebase({
  scope: {},
  plugins: []
});
```

Relevant options include:

| Option | Purpose |
| --- | --- |
| `scope` | Initial expression scope |
| `plugins` | Plugins installed during construction |
| `host` | Host framework identifier |
| `builtIns` | Disable built-in syntax when set to `false` |

## `rebase.directive(name, handler, options)`

Registers a directive.

```js
rebase.directive("hello", ({ expression }) =>
  `Hello ${expression}`
);
```

Returns the Rebase instance.

## `rebase.block(name, handler, options)`

Registers a block handler.

```js
rebase.block("card", ({ body }) =>
  `<article>${body}</article>`
);
```

## `rebase.expression(name, handler, options)`

Registers an expression handler.

Expression registration is useful for named extension behavior exposed by plugins.

## `rebase.hook(name, handler)`

Registers a hook.

```js
rebase.hook("render", ({ root, scope }) => {
  // observe a render
});
```

## `rebase.use(plugin, options)`

Installs a plugin after instance creation.

Supported plugin forms are function plugins and objects with an `install` method.

```js
rebase.use(plugin);
rebase.use(plugin, { option: true });
```

## `rebase.transform(source, options)`

Transforms source asynchronously.

```js
const html = await rebase.transform(source, {
  scope: {
    name: "Rebase"
  }
});
```

The options can provide a temporary scope and host.

## `rebase.mount(target, options)`

Mounts a template into a browser DOM element.

```js
const controller = rebase.mount("#app", {
  template: "<p>Hello</p>",
  scope: {}
});
```

Returns an object containing `update()` and `unmount()`.

## `rebase.update()`

Re-renders all roots currently mounted by the instance.

## `rebase.syntax`

The syntax registry is available for advanced integrations.

Useful methods include:

```js
rebase.syntax.disable("directive", "example");
rebase.syntax.enabled("directive", "example");
```

## `createSvelteRebase(options)`

The Svelte adapter creates a Rebase instance with the Svelte host configured.

```js
import { createSvelteRebase } from "@rebase/adapters/svelte";
```

The adapter protects Svelte-native block syntax.
