import './style.css';
import CardFrontBack from '../../components/CardFontBack';

function BoardGame(amountCards) {
  const $htmlCardFrontBack = CardFrontBack()
  const $htmlContent = $htmlCardFrontBack.repeat(amountCards)
  return `
    <section class="board-game">
      ${$htmlContent}
    </section>
  `
}

export default BoardGame;