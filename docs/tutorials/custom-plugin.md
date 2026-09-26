# Tutorial: build your first plugin

We will create a `{@badge ...}` directive.

## 1. Decide the syntax

```html
{@badge Beta}
```

Desired output:

```html
<span class="badge">Beta</span>
```

## 2. Write the plugin

```js
export default rebase => {
  rebase.directive("badge", ({ expression }) => {
    return `<span class="badge">${expression}</span>`;
  });
};
```

## 3. Register it

```js
import { createRebase } from "rebase";
import badge from "./badge.js";

const rebase = createRebase({
  plugins: [badge]
});
```

## 4. Use it

```html
{@badge Beta}
```

## 5. Handle input safely

The example inserts the expression into HTML. In a real application, escape user-controlled values before inserting them into generated markup.

## 6. Test it

```js
import test from "node:test";
import assert from "node:assert/strict";
import badge from "./badge.js";

test("registers badge", () => {
  const directives = new Map();

  badge({
    directive(name, handler) {
      directives.set(name, handler);
      return this;
    }
  });

  const result = directives.get("badge")({
    expression: "Beta"
  });

  assert.equal(result, '<span class="badge">Beta</span>');
});
```

For larger plugins, document the API, supported Rebase versions, errors and examples.
