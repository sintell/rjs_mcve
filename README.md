# MCVE for SO [question](http://stackoverflow.com/questions/33288288/can-r-js-resolve-dependency-installed-with-npm)

### Installation

* `npm install`


### Run

* `node index.js`

#### Expected result

```
B, [Function]
A
```

#### Current result

```
{ [Error: Error: ENOENT: no such file or directory, open './jquery.js'
In module tree:
    a
      b

    at Error (native)
]
  originalError:
   { [Error: ENOENT: no such file or directory, open './jquery.js']
     errno: -2,
     code: 'ENOENT',
     syscall: 'open',
     path: './jquery.js',
     fileName: './jquery.js',
     moduleTree: [ 'b', 'a' ] } }

```