# Getting started

## Create an instance

```js
import { createRebase } from "rebase";

const rebase = createRebase();
```

## Add a directive

```js
rebase.directive("hello", ({ expression }) => {
  return `<strong>Hello ${expression}</strong>`;
});
```

Use it in source:

```html
<p>{@hello Rebase}</p>
```

Transform the source:

```js
const html = await rebase.transform("<p>{@hello Rebase}</p>");
```

## Add a plugin

```js
const hello = rebase => {
  rebase.directive("hello", ({ expression }) =>
    `<strong>Hello ${expression}</strong>`
  );
};

const app = createRebase();
app.use(hello);
```

For reusable packages, see [Plugin development](/plugins/overview).

## Browser mounting

```js
rebase.mount("#app", {
  template: "<p>{@hello Rebase}</p>"
});
```

Continue with [Core concepts](/guide/overview).
