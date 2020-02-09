import {changeScreen, render} from './js/util.js';
import {game, quest} from './js/data/quest.js';
import renderLevel from './js/game/game-level.js';
import renderHeader from './js/game/header.js';
import end from './js/end.js';

const footer = `<div class="footer">Справочная информация</div>`;

let current = 0;
let element;

const getLevel = (num) => {
    quest[`level-${num}`];
}

const changeLevel = (num) => {
    current = num;
    let level = getLevel(num);
    element = render(`
        ${renderHeader(gamgulpe)}
        ${renderLevel(level)}
        ${footer}
    `);
};

element = changeLevel(0);

document.addEventListener('click', (evt)=> {
    evt.preventDefault();
    if(evt.target) {
        const next = current + 1;
        changeScreen(changeLevel(next));
    }else {
        changeLevel(0);
        changeScreen(end);
    }
})


export default element;