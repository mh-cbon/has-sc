# has-sc

Tells if windows [sc](https://technet.microsoft.com/en-us/library/bb490995.aspx) is vailable.

## Usage

```js
require('@mh-cbon/has-sc')(function (hasSc) {
  console.log("This system runs sc : %s", hasSc?"yes":"no")
})
```
