# What is Rebase?

Rebase is a **JavaScript-first enhancement layer for the web**.

It sits between ordinary web markup and optional application-specific extensions. It is not intended to replace Svelte, Vue, React or another framework.

## The basic idea

A Rebase application has a runtime instance:

```js
const rebase = createRebase();
```

That instance has a syntax registry. Plugins and application code register capabilities with it:

```js
rebase.directive("hello", ({ expression }) =>
  `<strong>Hello ${expression}</strong>`
);
```

The registered directive can then be used in markup:

```html
{@hello world}
```

This makes Rebase explicit: a feature exists because the current instance registered it.

## Rebase is not a framework

Rebase does not attempt to provide a complete component model, router, virtual DOM or state-management system. It provides a small runtime and extension API that can complement those tools.

## Extension points

### Directives

Inline extensions:

```html
{@date as YYYY-MM-DD}
```

### Blocks

Content-wrapping extensions:

```html
{#feature}
  <p>Feature content</p>
{/feature}
```

### Expressions

Named evaluation behavior can be exposed through the syntax registry for plugins and application code.

## Central principle

> Rebase only owns syntax that the active Rebase instance explicitly registers.

Host adapters can additionally disable known framework-native constructs.
