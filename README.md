# [Hey](https://github.com/rakyll/hey) + [Go2Node](https://github.com/zealic/go2node)

Node wrapper / extension to [Hey](https://github.com/rakyll/hey) making it report response stats during execution using the Node IPC protocol.

## Installation

```bash
npm install hey2node
```

Note: Requires go 1.7 or greater.

## Usage

```javascript
require('hey2node')(
  ['-n', 5, '-c', 1, 'https://www.github.com/alternatex/hey2node'],
  (msg) => console.log(msg),
  (code) => console.log(code)
);
```

## Test

```
make test
```

## Credits
- [Hey](https://github.com/rakyll/hey)
- [Go2Node](https://github.com/zealic/go2node)
