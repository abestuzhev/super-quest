'use strict';
import {changeScreen, render} from './util.js'; 
import gameScreen from './game-screen.js';


const template = `
    <div>
        <div class="end">
            <p>
                Привет! Настало время приключений!
                Вы готовы сразиться с неприятностями и получить принцессу?
            </p>

            <div class="repeat">
                Ваше имя <input type="text">
                <div class="c-btn-layout">
                    <span class="c-btn repeat-action">Да</span>
                </div>                   
            </div>
        </div>
    </div>
`;

const element = render(template);
export default element; 

window.onload = () => {
    document.querySelector('.repeat-action').addEventListener( 'click', () => {
        changeScreen(gameScreen);
    });

}


 