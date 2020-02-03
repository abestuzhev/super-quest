'use strict';
const mainElement = document.querySelector('#main');

export const render = (element) => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = element.trim();
    return wrapper;
};

export const changeScreen = function(element) {
    mainElement.innerHTML = ``;
    mainElement.appendChild(element);
};





