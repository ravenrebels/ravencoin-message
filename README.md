# ravencoin-message

Sign and Verify messages in Ravencoin

## If you want to use it in the browser, use Browserify

@ravenrebels/ravencoin-message is based on 'bitcoinjs-lib' which uses tons of Node stuff.

To make that work in the browser you need to use Browserify

## How to use

```
const { sign, verifyMessage } = require("ravencoin-message");

const address = "RS4EYELZhxMtDAuyrQimVrcSnaeaLCXeo6";
const message = "Hello world";
const signature = "H2zo48+tI/KT9eJrHt7PLiEBMaRn1A1Eh49IFu0MbfhAFBxVc0FG2UE5E79PCbhd9KexijsQxYvNM6AsVn9EAEo=";

console.log(verifyMessage(message, address, signature));
```
