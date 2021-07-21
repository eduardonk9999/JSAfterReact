import CardGame from '../CardGame/index'

function CardFrontBack() {
  return /*html*/`
    <article class="card-front-back">
      ${CardGame()}
      ${CardGame("javascript", "Logo do Javascript")}
    </article>
  `
}
export default CardFrontBack;