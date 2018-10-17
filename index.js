'use strict';

const noop = () => {};
const loadJS = require('load.js').js;

module.exports = window.olark || loadOlark();

function loadOlark() {
    const url = 'static.olark.com/jsclient/loader.js';
    loadJS(`//${url}`, noop);
  
    const item = window.olark = function() {
        k.s.push(arguments);
        k.t.push(+new Date);
    };
    
    item.extend = (i, src) => {
        item('extend', i, src);
    };
  
    item.identify = (o) => {
        item('identify', k.i = o);
    };
  
    item.configure = (key, callback) => {
        item('configure', key, callback);
        k.c[key] = callback;
    };
  
    const k = item._ = {
        s : [],
        t : [+new Date],
        c : {},
        l : url,
    };
  
    return item;
}

