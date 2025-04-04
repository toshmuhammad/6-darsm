import { elHands, elRefreshGameButton } from "./html-elements.js";
import { refreshGame } from "./refresh-game.js";
import { sectionSwapper } from "./section-swapper.js";
import { uiChanger } from "./ui-changer.js";

elHands.forEach((element) => {
    element.addEventListener("click", function(e) {
        console.log(e.target);
        uiChanger(e.target);
        sectionSwapper(true);
    });
});

elRefreshGameButton.addEventListener("click", function () {
    refreshGame()
});