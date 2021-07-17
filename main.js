import "./src/styles/settings/colors.css"
import "./src/styles/generic/reset.css"
import "./src/styles/elements/base.css"
import BoardGame from "./src/objects/BoardGame"
import PlayerGame from "./src/components/PlayerGame"
import ScoreBoard from "./src/objects/ScoreBoard"

const $root = document.querySelector("#root")
const $htmlBoardGame = BoardGame(6)
const $htmlPlayerGame = PlayerGame()

$root.insertAdjacentHTML(
  "beforeend",
  `
    ${ScoreBoard()}
    ${BoardGame(6)}
  `  
)

