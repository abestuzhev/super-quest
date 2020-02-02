(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define('test', ['exports'], factory) :
    (global = global || self, factory(global.test = {}));
}(this, (function (exports) { 'use strict';

    const testFunc = () => {
      console.log('test done');
    };

    exports.testFunc = testFunc;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
