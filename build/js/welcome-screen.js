(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define('welcomeScreen', factory) :
    (global = global || self, global.welcomeScreen = factory());
}(this, (function () { 'use strict';

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

    const element = document.createElement('div');
    element.innerHTML = `
    <div class="c-btn back">❮ Home</div>
    <header class="header">
        <div>Мир: 0</div>
        <div>
            Жизни
            <div class="header-heart">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <div>DВремяф: 0</div>
    </header>
    <section class="quest">
        <p>
            Вас зовут Луиджи Марио, вы водопроводчик, но сейчас 
            перед вами стоит очень важная миссия - спасти принцессу
            грибного королевства Тоадству Пич. Ее похитил злой повелитель
            черепах Боузер. Вы отправитесь в грибное королевство, чтобы 
            победить Баузера и освободить принцессу. Вы отправляетесь 
            в первый замок, но, чтоы в него попасть нужно преодолеть
            несколько препятствий.
        </p>
        <input type="text">
        <ul class="answers">
            <li class="answer">LEFT. Вы побежите влево от гриба</li>
            <li class="answer">JUMP. Вы прыгните вверх</li>
            <li class="answer">RIGHT. Вы побежите вправо от гриба</li>
        </ul>

        <div class="result"></div>
    </section>
`;

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
    const element$1 = render(template);

    window.onload = () => {
      document.querySelector('.repeat-action').addEventListener('click', () => {
        changeScreen(element);
      });
    };

    return element$1;

})));
