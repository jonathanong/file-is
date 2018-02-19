
# file-is

[![Greenkeeper badge](https://badges.greenkeeper.io/jonathanong/file-is.svg)](https://greenkeeper.io/)

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Dependency Status][david-image]][david-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

Check the mime type of a file or binary.
A thin wrapper around [type-is](https://github.com/jshttp/type-is) and
[mmmagic](https://github.com/mscdex/mmmagic).

```js
const is = require('file-is')

is('./some/image.png', 'image/*').then(type => console.log(type))
is(new Buffer('something'), 'text/*').then(type => console.log(type))
```

## API

### is(String | Buffer | Stream, types...).then( type => )

The first input can be a string for the filename
or a buffer/stream for the actual contents.
The content can not be a string because
then there's no point in using this library.


`types` is an array or argument of types.
See [typeis.is\(\)](https://github.com/jshttp/type-is#type--isismediatype-types) for more details.

`type` is the first match in the list of types.

[npm-image]: https://img.shields.io/npm/v/file-is.svg?style=flat-square
[npm-url]: https://npmjs.org/package/file-is
[github-tag]: http://img.shields.io/github/tag/jonathanong/file-is.svg?style=flat-square
[github-url]: https://github.com/jonathanong/file-is/tags
[travis-image]: https://img.shields.io/travis/jonathanong/file-is.svg?style=flat-square
[travis-url]: https://travis-ci.org/jonathanong/file-is
[coveralls-image]: https://img.shields.io/coveralls/jonathanong/file-is.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/jonathanong/file-is
[david-image]: http://img.shields.io/david/jonathanong/file-is.svg?style=flat-square
[david-url]: https://david-dm.org/jonathanong/file-is
[license-image]: http://img.shields.io/npm/l/file-is.svg?style=flat-square
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/file-is.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/file-is
