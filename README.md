# has-sc

Tells if windows [sc](https://technet.microsoft.com/en-us/library/bb490995.aspx) is vailable.

## Usage

```js
require('@mh-cbon/has-sc')(function (hasSc) {
  console.log("This system runs sc : %s", hasSc?"yes":"no")
})
```

## Testing

#### windows

To run the __windows__ tests on a fedora-like box,

- download and install [vagrant from their website](https://www.vagrantup.com/downloads.html), do not use distrib package. WinRM is somehow broken at that day.
- install [winrm plugin](https://github.com/criteo/vagrant-winrm): `vagrant plugin install vagrant-winrm`
- execute `npm run test-windows`

You can check windows execution output into `mocha-stderr.log` and `mocha-stdout.log` files.


#### linux
To run the __linux__ tests on a fedora-like box,

- download and install `vagrant`
- execute `npm run test-not-windows`

or just

- download and install `mocha`
- `mocha tests/not-windows.js`
