var requirejs = require('requirejs');

requirejs.optimize({
    base: '.',
    nodeRequire: require,
    include: ['a', 'b'],
    out: function(text) {
        console.log(text);
    }
});
