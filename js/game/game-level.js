export default (level) => {
    return `<section class="quest">
        <p>${level.text}</p>
        <input type="text">
        <ul class="answers">
            ${level.answers.map((elem)=>{
                `<li class="answer">${elem}</li>`
            })}
        </ul>
    </section>`;
};