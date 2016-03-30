# has-sc

Tells if windows [sc](https://technet.microsoft.com/en-us/library/bb490995.aspx) is vailable.

## Usage

```js
require('@mh-cbon/has-sc')(function (err, scPath) {
  console.log("This system runs sc : %s", err?"no":"yes");
  scPath && console.log("Found sc at path : %s", scPath)
})
```

## Testing

#### windows

To run the __windows__ tests on a fedora-like box,

- download and install [vagrant from their website](https://www.vagrantup.com/downloads.html), do not use distrib package. WinRM is somehow broken at that day.
- install [winrm plugin](https://github.com/criteo/vagrant-winrm): `vagrant plugin install vagrant-winrm`
- execute `npm run test-windows`


#### linux
To run the __linux__ tests on a fedora-like box,

- download and install `vagrant`
- execute `npm run test-not-windows`

or just

- download and install `mocha`
- `mocha test/not-windows.js`

## Notes

A static build version of `wget` is included in this repository for testing purposes on windows.

The reasons are :

- power shell is not a reliable tool to do so because it provides such thing only from version 3.0
- windows does not provide alternative to power shell capabilities
- i was lazy to write a statically built C component
- it exists.
