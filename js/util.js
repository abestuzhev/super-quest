'use strict';
// import gameScreen from './game-screen.js';

// aeyrwbb

export const render = (element) => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = element.trim();
    return wrapper;
};

const mainElement = document.querySelector('#main');

export const changeScreen = function(element) {
    mainElement.innerHTML = ``;
    mainElement.appendChild(element);
};





