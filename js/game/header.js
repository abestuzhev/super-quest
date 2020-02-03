export default (game) => {
const header = `<header class="header">
                    <div>Мир: ${game.level}</div>
                    <div>Жизни: ${game.lives}</div>
                    <div>Время: ${game.time}</div>
                </header>`;
return header;
}