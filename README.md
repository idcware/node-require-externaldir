# node-require-externaldir

Equivalent of require, but in another dir than node_modules to be able to version custom modules.

# Usage

Default include dir is "includes":
```js
var include = require('node-require-externaldir');

// foo is located at ../...../includes/foo
var foo = include('foo');
```

Change the include dir:
```js
var include = require('node-require-externaldir');
include.include_dir = "bar";

// foo is located at ../...../bar/foo
var foo = include('foo');
```

# license
MIT

