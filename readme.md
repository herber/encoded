# encoded [![Codestyle fyi](https://img.shields.io/badge/code%20style-fyi-E91E63.svg)](https://github.com/tobihrbr/fyi) [![Build Status](https://travis-ci.org/tobihrbr/encoded.svg?branch=master)](https://travis-ci.org/tobihrbr/encoded) [![Build status](https://ci.appveyor.com/api/projects/status/3fworofgx8r02yvr?svg=true)](https://ci.appveyor.com/project/tobihrbr/encoded)

> Encode things

## Install

```
$ npm install --save encoded
```

## Usage

```js
const encoded = require('encoded');

encoded.encode('unicorns');
//=> 'dW5pY29ucw=='

encoded.decode('cmFpbmJvd3M=');
//=> 'rainbows'
```

## API

### encoded.encode(input, [type])

#### input

Type: any

The data you want to encode.

#### type

Type: `string`<br>
Default: `base64`

How you want the data to be encoded.

### encoded.encode(input, [type])

#### input

Type: `string`

An encoded string.

#### type

Type: `string`<br>
Default: `base64`

How the string is encoded.

#### to

Type: `string`<br>
Default: `ascii`

What you want to get back.

## License

MIT © [Tobias Herber](https://tobihrbr.com)
