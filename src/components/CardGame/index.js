import './style.css';

function CardGame(icon = 'alurapixel', alt) {
  return `
    <article class="card-game">
      <img src="../images/${icon}.png" alt="${alt}">
    </article>
  `;
}

export default CardGame