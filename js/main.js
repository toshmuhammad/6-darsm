import { elGameZoneInner, elHands, elModeChanger, elRefreshGameButton, elRuleImag, elRules, elRulesModal } from "./html-elements.js";
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


// elModeChanger.addEventListener("click", function () {
//     const mode = elGameZoneInner.dataset.mode;

//     if (mode === "simple") {
//         elGameZoneInner.dataset.mode = "advanced";
//     } else if (mode === "advanced") {
//         elGameZoneInner.dataset.mode = "simple";
//     } else {
//         elGameZoneInner.dataset.mode = "simple";
//     }
// });

elModeChanger.addEventListener("click", function () {
    const mode = elGameZoneInner.dataset.mode;
    if (mode === "simple") {
        elGameZoneInner.dataset.mode = "advanced";
        elModeChanger.innerText = "Simple";
        elRuleImag.src = "./image/qoida.svg";
    } else if (mode === "advanced") {
        elGameZoneInner.dataset.mode = "simple";
        elRuleImag.src = "./image/2-qoida.svg";
        elModeChanger.innerText = "Advanced";
    } else {
        elGameZoneInner.dataset.mode = "simple";
        elRuleImag.src = "./image/2-qoida.svg";
        elModeChanger.innerText = "Advanced";
    }
});


elRules.addEventListener("click", function () {
    console.log(elRulesModal.showModal());
});