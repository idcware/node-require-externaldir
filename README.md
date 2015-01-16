# reqexd

Equivalent of require, but in another dir than node_modules to be able to version custom modules.

# Usage

Default include dir is "includes":
```js
var reqexd = require('reqexd');

// foo is located at ../...../includes/foo
var foo = reqexd('foo');
```

Change the include dir:
```js
var reqexd = require('reqexd');
reqexd.include_dir = "bar";

// foo is located at ../...../bar/foo
var foo = reqexd('foo');
```

# license
MIT

