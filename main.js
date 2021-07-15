import "./src/styles/settings/colors.css"
import "./src/styles/generic/reset.css"
import "./src/styles/elements/base.css"
import BoardGame from "./src/objects/BoardGame"
import PlayerScore from "./src/components/PlayerScore"

const $root = document.querySelector("#root")
const $htmlBoardGame = BoardGame(6)
const $htmlPlayerScore = PlayerScore(1)
const $htmlPlayerScoreDois = PlayerScore(2)


$root.insertAdjacentHTML("beforeend", $htmlBoardGame)

$root.insertAdjacentHTML("afterbegin", $htmlPlayerScore  + $htmlPlayerScoreDois)
