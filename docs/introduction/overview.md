# Overview

Rebase is a JavaScript-first enhancement layer for the web.

It gives applications a small syntax and plugin runtime without requiring the application to adopt another complete UI framework.

## The problem

Web applications already have many ways to generate markup: plain HTML, server-side templates, Svelte, Vue, React and custom rendering systems. A small reusable feature can be awkward to express across all of them.

Rebase provides a common extension layer for these cases.

## The model

```text
source markup
     │
     ▼
Rebase instance
     │
     ├── syntax registry
     ├── scope
     └── plugins
     │
     ▼
rendered markup
```

Plugins register behavior. The instance decides which registered behavior is active. The renderer produces output.

## What Rebase is not

Rebase is not intended to replace component frameworks, routers, application state libraries, build tools or a virtual DOM.

## The core rule

> If an extension has not been registered with the current Rebase instance, Rebase does not process it.
