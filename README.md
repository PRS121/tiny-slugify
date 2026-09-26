# @saurav121/tiny-slugify

Tiny, dependency-light slugifier. This is the **demo target** for the
[Detonation Chamber](https://github.com/PRS121/detonation-chamber) — every release is shipped by the
Release Captain agent, which detonates each changed dependency in a sealed sandbox first.

## Usage

```js
import { slugify } from '@saurav121/tiny-slugify';

slugify('Hello World');                       // 'hello-world'
slugify('Crème Brûlée');                       // 'creme-brulee'
slugify('Release Captain', { separator: '_' }); // 'release_captain'
slugify('one two three', { maxLength: 7 });    // 'one-two'
```

CLI:

```sh
npx tiny-slugify "Hello World"   # -> hello-world
```

## Options

| Option | Default | Meaning |
|---|---|---|
| `separator` | `'-'` | Character between words |
| `lower` | `true` | Lowercase the result |
| `maxLength` | `0` (off) | Truncate, dropping any trailing separator |

## Development

```sh
npm test   # node --test
```
