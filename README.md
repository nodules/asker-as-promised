# Asker as Promised [![NPM version][npm-image]][npm-link]

Wraps [Asker](https://github.com/nodules/asker) to return native promises.

## Install

`npm install asker-as-promised`

## Usage

```js
var ask = require('asker-as-promised');

ask({ host : 'ya.ru' })
    .then(response => {
        ...
    })
    .catch(error => {
        ...
    });
```

[npm-image]: https://img.shields.io/npm/v/asker-as-promised.svg?style=flat
[npm-link]: https://npmjs.org/package/asker-as-promised
