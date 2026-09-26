# Tutorial: dates and times

The official date plugin adds `{@date}` and `{@datetime}` directives.

## Basic date

```html
{@date}
```

The default format is:

```text
YYYY-MM-DD
```

## Basic datetime

```html
{@datetime}
```

The default format is:

```text
YYYY-MM-DD HH:mm:ss
```

## Custom formats

Use `as`:

```html
{@date as DD.MM.YYYY}
{@datetime as HH:mm:ss}
{@datetime as DD.MM.YYYY HH:mm}
```

## Format tokens

| Token | Meaning |
| --- | --- |
| `YYYY` | Four-digit year |
| `YY` | Two-digit year |
| `MMMM` | Full month name |
| `MMM` | Short month name |
| `MM` / `M` | Month |
| `DD` / `D` | Day |
| `dddd` | Full weekday |
| `ddd` | Short weekday |
| `HH` / `H` | 24-hour clock |
| `hh` / `h` | 12-hour clock |
| `mm` / `m` | Minutes |
| `ss` / `s` | Seconds |
| `SSS` | Milliseconds |
| `A` | AM/PM |
| `a` | am/pm |
| `Z` | Timezone offset, e.g. +02:00 |
| `ZZ` | Compact timezone offset, e.g. +0200 |

Separators are preserved.

## Specific dates

```html
{@date "2026-09-26" as DD.MM.YYYY}
{@datetime "2026-09-26T14:05:09" as HH:mm:ss}
```

Use `now` explicitly:

```html
{@datetime now as HH:mm:ss}
```

## Locale and timezone

Month and weekday names use the runtime locale. Date and time fields use the JavaScript runtime's local timezone.

## Direct API

The plugin also exports `formatDate`:

```js
import { formatDate } from "@rebase/date";

formatDate(new Date(2026, 8, 26), "DD.MM.YYYY");
```

This is useful outside Rebase templates.
