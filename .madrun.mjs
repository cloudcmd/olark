'use strict';

const {
    run
} = require('madrun');

module.exports = {
    "lint": () => 'putout index.js madrun.js',
    'fix:lint': () => run('lint', '--fix')
};

