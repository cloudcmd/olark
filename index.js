'use strict';

const identityLoginURL = 'static.olark.com/jsclient/loader.js';

if (!window.olark) {
    const el = document.createElement('script');
    const [script] = document.getElementsByTagName('script');
    el.async = 1;
    el.src = '//' + identityLoginURL;
    script.parentNode.insertBefore(el, script);
    
    const olark = window.olark = (...args) => {
        k.s.push(args);
        k.t.push(Number(new Date));
    };
    /**
    * @param {?} i
    * @param {?} src
    * @return {undefined}
    */
    olark.extend = (i, src) => {
        olark('extend', i, src);
    };
    /**
    * @param {string} o
    * @return {undefined}
    */
    olark.identify = (o) => {
        olark('identify', k.i = o);
    };
    /**
    * @param {?} key
    * @param {?} callback
    * @return {undefined}
    */
    olark.configure = (key, callback) => {
        olark('configure', key, callback);
        k.c[key] = callback;
    };
    const k = olark._ = {
        s: [],
        t: [Number(new Date)],
        c: {},
        l: identityLoginURL,
    };
}

module.exports = window.olark;

