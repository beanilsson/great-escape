# great-escape
A small nodejs module for HTML character escaping

Will escape the following characters:
&, <, >, ", ', `, , !, @, $, %, (, ), =, +, {, }, [, and ]

## Installation
npm install great-escape --save

## Usage
```javascript
var greatEscape = require('great-escape');
escape = greateEscape.escape;
var html = '<h1>Hello World</h1>', escaped = escape(html);
console.log('html', html, 'escaped', escaped);
 ```

## Tests
npm test

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

## Release History

* 0.1.0 Initial release

## Disclaimer

All of the characters listed above can be used to break out of an unquoted HTML attribute value. Even if you escape all of them, you’re still a subject to potential attacks. It boils down to a matter of context. This module doesn't cover cases like inserting user input into the body of an inline <script> tag, for example.
