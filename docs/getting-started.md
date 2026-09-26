# Getting started

This guide introduces the smallest useful Rebase setup.

## Create an instance

```js
import { createRebase } from "rebase";

const rebase = createRebase();
```

Library and integration authors can use the core entry point:

```js
import { createRebase } from "@rebase/core";
```

## Register a directive

A directive uses `{@name ...}`:

```js
rebase.directive("hello", ({ expression }) => {
  return `<strong>Hello ${expression}</strong>`;
});
```

Then:

```html
{@hello Rebase}
```

## Transform markup

```js
const output = await rebase.transform("<p>{@hello Rebase}</p>");
```

`transform()` is asynchronous because directive plugins may perform asynchronous work.

## Mount into the DOM

For browser-side rendering:

```js
const controller = rebase.mount("#app", {
  template: "<p>{@hello Rebase}</p>"
});
```

The controller supports:

```js
controller.update();
controller.unmount();
```

## Core syntax

| Syntax | Purpose |
| --- | --- |
| `{@name ...}` | Registered directive |
| `{#name ...}{/name}` | Registered block |
| `{{ expression }}` | Runtime interpolation in standalone Rebase rendering |

Most additional features belong in plugins.

## Framework hosts

Rebase can be created with a host so native framework syntax is protected. The Svelte adapter protects native blocks such as `{#if}`, `{#each}`, `{#await}`, `{#key}` and `{#snippet}`.

See [How it works](/concepts/how-it-works) for the rendering model.
