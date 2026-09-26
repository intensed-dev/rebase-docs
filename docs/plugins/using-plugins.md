# Using plugins

Plugins are opt-in capabilities. A Rebase instance can receive them during creation or later through `use()`.

## During creation

```js
import { createRebase } from "rebase";
import date from "@rebase/date";

const rebase = createRebase({
  plugins: [date]
});
```

## Later

```js
const rebase = createRebase();

rebase.use(date);
```

This is useful when a feature is loaded conditionally or dynamically.

## What a plugin changes

A plugin should only add the capabilities it registers.

For example, the date plugin adds:

```text
{@date ...}
{@datetime ...}
```

Without that plugin, those directives are not part of the instance.

## Transforming

```js
const rebase = createRebase({
  plugins: [date]
});

const html = await rebase.transform(
  "<time>{@date as DD.MM.YYYY}</time>"
);
```

## Framework projects

For Svelte:

```js
import { createSvelteRebase } from "@rebase/adapters/svelte";

const rebase = createSvelteRebase({
  plugins: [date]
});
```

The adapter protects Svelte-native syntax.

## Disabling syntax

A registered syntax name can be disabled:

```js
rebase.syntax.disable("directive", "example");
```

This is useful when a plugin stays installed but one capability should be inactive.

## Security

Rebase expressions are evaluated as JavaScript in the current runtime. Treat templates and expressions as trusted source.

Do not pass arbitrary untrusted user input to expression evaluation. Plugins should also escape generated HTML when necessary.
