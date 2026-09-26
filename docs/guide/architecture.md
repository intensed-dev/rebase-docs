# Architecture

Rebase is split into a small runtime, a syntax registry, adapters, and plugins.

## Runtime

The `Rebase` class owns the state of one Rebase instance:

- options
- scope
- registered plugins
- syntax registry
- mounted roots

Instances are independent. Installing a plugin into one instance does not modify another instance.

## Syntax registry

`SyntaxRegistry` stores four kinds of extension points:

| Registry | Purpose |
| --- | --- |
| expressions | Named expression handlers |
| directives | Inline `{@...}` handlers |
| blocks | `{#...}{/...}` handlers |
| hooks | Runtime lifecycle hooks |

Syntax can also be disabled by type and name.

## Transformation pipeline

Conceptually, rendering follows this order:

1. Receive source and scope.
2. Process registered blocks.
3. Process registered directives.
4. Process standalone interpolation when no host framework owns the syntax.
5. Return the generated string.
6. For mounted roots, bind supported DOM event attributes and emit the render hook.

The implementation is intentionally small and string-oriented.

## Plugins

Plugins receive the public Rebase API rather than reaching into internal implementation details.

```js
export default rebase => {
  rebase.directive("example", context => {
    return context.expression;
  });
};
```

This keeps extensions decoupled from the parser and allows the core to evolve without requiring plugins to know its internal data structures.

## Hosts and adapters

A host adapter tells Rebase that another system owns particular syntax.

For Svelte, the adapter protects native blocks such as:

```text
{#if}
{#each}
{#await}
{#key}
{#snippet}
```

The important rule is that framework syntax is not rewritten merely because it looks similar to Rebase syntax.

## Browser rendering vs transformation

`transform()` is the general transformation API and supports asynchronous directive handlers.

`mount()` is a browser-oriented convenience for rendering a template into an existing DOM element.

Use transformation when you need generated source. Use mounting when Rebase is responsible for a browser DOM root.
