# How it works

Rebase has a deliberately small runtime architecture.

## 1. Create an instance

```js
const rebase = createRebase({
  plugins: [date]
});
```

The instance owns its own options, scope, syntax registry, plugin registry and mounted roots.

## 2. Register syntax

Plugins call the public API:

```js
rebase.directive("example", handler);
rebase.block("example", handler);
rebase.expression("example", handler);
```

The syntax registry stores those handlers.

## 3. Parse registered syntax

A directive has the form:

```text
{@name expression}
```

A block has the form:

```text
{#name expression}
  ...
{/name}
```

Only registered names are handled. Unknown syntax is left alone.

## 4. Run the handler

Handlers receive a context:

```js
{
  name,
  expression,
  body,
  scope,
  rebase
}
```

A handler can generate a string, calculate a value or perform asynchronous work.

## 5. Produce output

```js
rebase.directive("hello", ({ expression }) =>
  `<strong>Hello ${expression}</strong>`
);
```

Input:

```html
{@hello Rebase}
```

Output:

```html
<strong>Hello Rebase</strong>
```

## Async directives

`transform()` supports asynchronous handlers:

```js
rebase.directive("remote", async ({ expression }) => {
  const value = await getValue(expression);
  return String(value);
});

const html = await rebase.transform(source);
```

## Host-aware behavior

A host can be selected:

```js
const rebase = createRebase({ host: "svelte" });
```

The Svelte adapter protects Svelte-native blocks so Rebase does not consume them.

## Rendering model

The current runtime is intentionally lightweight. It uses string transformation for source rendering and DOM event binding for mounted roots. It is not a virtual DOM.
