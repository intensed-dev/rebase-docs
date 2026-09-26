# Syntax

Rebase has three primary markup forms.

## Directives

A directive is an inline extension:

```html
{@name expression}
```

The name must have been registered:

```js
rebase.directive("name", ({ expression }) => {
  return expression;
});
```

### Names

Directive names may contain letters, numbers, underscores, dollar signs, hyphens and namespace separators supported by the parser.

A plugin should use a name that is unlikely to collide with another plugin.

## Blocks

A block wraps content:

```html
{#name expression}
  content
{/name}
```

Register one with:

```js
rebase.block("name", ({ expression, body }) => {
  return body;
});
```

Blocks are useful when the extension needs to control or transform a larger section of markup.

## Interpolation

Standalone Rebase rendering supports:

```html
{{ user.name }}
```

The expression is evaluated against the current scope and HTML-escaped before insertion.

When a host framework owns interpolation syntax, do not assume Rebase will replace it. Host-aware integrations are intended to preserve framework behavior.

## Scope

A transformation can receive local scope:

```js
const html = await rebase.transform(
  "<p>{{ name }}</p>",
  {
    scope: {
      name: "Rebase"
    }
  }
);
```

Plugins receive that scope through their handler context.

## Expressions are JavaScript

The current core evaluates expressions using JavaScript's `Function` constructor with the supplied scope.

That means expressions are powerful, but they are not a sandbox.

**Treat Rebase templates and expressions as trusted source.**

Do not evaluate arbitrary user-submitted templates.

## Unknown syntax

Unknown directives and blocks are left untouched.

This is a core design property: Rebase should not consume syntax it does not know how to handle.
