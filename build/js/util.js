(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define('util', ['exports'], factory) :
    (global = global || self, factory(global.util = {}));
}(this, (function (exports) { 'use strict';

    // aeyrwbb

    const render = element => {
      const wrapper = document.createElement('div');
      wrapper.innerHTML = element.trim();
      return wrapper;
    };
    const mainElement = document.querySelector('#main');
    const changeScreen = function (element) {
      mainElement.innerHTML = ``;
      mainElement.appendChild(element);
    };

    exports.changeScreen = changeScreen;
    exports.render = render;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
