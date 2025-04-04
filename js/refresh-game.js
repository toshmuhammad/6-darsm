import { elRobot, elStatus } from "./html-elements.js";
import { sectionSwapper } from "./section-swapper.js";

export function refreshGame() {
    elRobot.src = "./img/qogoz.svg";
    elStatus.innerText = "";
    sectionSwapper(false);
}