'use strict';

const loadJS = require('load.js').js;

module.exports = window.olark || loadOlark();
const getDate = () => Number(new Date());

function loadOlark(...args) {
    const url = 'static.olark.com/jsclient/loader.js';
    loadJS(`//${url}`);
    
    const datesList = [getDate()];
    const argsList = [];
    const config = [];
    
    const storage = {
        s: argsList,
        t: datesList,
        c: config,
        l: url,
    };
    
    const item = window.olark = () => {
        argsList.push(args);
        datesList.push(getDate());
    };
    
    item.extend = (i, src) => {
        item('extend', i, src);
    };
    
    item.identify = (o) => {
        item('identify', storage.i = o);
    };
    
    item.configure = (key, callback) => {
        item('configure', key, callback);
        config[key] = callback;
    };
    
    item._ = storage;
    
    return item;
}

