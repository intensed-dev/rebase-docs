# Directives

Directives are Rebase's inline extension syntax.

## Syntax

```text
{@name expression}
```

Register a directive with `directive()`:

```js
rebase.directive("hello", ({ expression }) => {
  return `Hello ${expression}`;
});
```

A handler receives `name`, `expression`, `scope` and `rebase`.

Unknown directives are preserved.

## Async directives

`transform()` supports Promise-returning handlers:

```js
rebase.directive("remote", async ({ expression }) => {
  return await loadValue(expression);
});
```

The synchronous mounting path cannot wait for a Promise.
