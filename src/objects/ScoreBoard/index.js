import PlayerGame from '../../components/PlayerGame/'
import './style.css'

function ScoreBoard() {
  return /*html*/`
    <header class="score-board">
      ${PlayerGame(1)}
      ${PlayerGame(2)}
    </header>;
  `;
}

export default ScoreBoard