import './style.css';

function PlayerGame(play) {
  return `
    <article class="player-score">
      <h2>Player ${play}</h2>
    </article>
  `;
}

export default PlayerGame