# Faddy Al Artificial as a Songwriter

Written by Faddy Michel

## Prerequisites

This is a RollScript, besides being a README, that can be run using Faddy's Roll.
Faddy's Roll can be installed as follows:

```bash
sudo npm i -g @faddys/roll
```

## Usage

```bash
roll README.md
```

## Implementation

### `index.html`

```roll
?# cat - > index.html

+==
<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>

<meta name="viewport" content="width=device-width, initial-scale=1">

<title>
Faddy Al Artificial as a Songwriter
</title>

</head>

<body>

<script type="module" src="index.js"></script>

</body>

</html>
-==
```

### `FaddysScenarist.js`

```roll
?# cp node_modules/@faddys/scenarist/index.js FaddysScenarist.js
```

### `index.js`

```roll
?# cat - > index.js

+==
import Scenarist from './FaddysScenarist.js';

Scenarist ( new class {

$_producer ( $ ) {

document .body .textContent = 'Hello World';

}

} );
-==
```

## Hosting

### Locally

`http-server` can be used to host the project's static files.
It can be installed as follows:

```bash
sudo npm i -g http-server
```

Now, host:

```roll
?# -1 -2 : http-server ./ -c-1 -p7664
```

### Globally

[GitHubPages](https://github.io) can be used to host the project's static files.
Refer to their documentation for instructions on hosting over there.

## Testing

```roll
?# rm -fr test ; mkdir test
?# cat - > test/index.js

+==
import puppeteer from 'puppeteer';

const page = await puppeteer .launch ()
.then ( browser => browser .newPage () );

page .on ( 'console', message => {

const type = message .type ();
const location = message .location ();
const text = message .text ();

console .error ( `#${ type } at ${ location .url }:${ location .line || '' }${ location .column ? `.${ location .column }` : '' }
${ message .text () }` )

} );

await page .goto ( 'http://localhost:7664' );

const body = await page .evaluate ( () => document .body .textContent );

console .log ( '#body', body );
-==

?# -2 node test
?# rm -fr test
```

## License; To Opt out of The copyright Industry's Game Altogether

```roll
?# cat - > LICENSE

+==
This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <https://unlicense.org>
-==
```
