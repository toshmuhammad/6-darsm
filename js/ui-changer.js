import { findWinner } from "./find-winner.js";
import { elRobot, elStatus, elUser } from "./html-elements.js";
import { robotChooser } from "./robot-chooser.js";

export function uiChanger(variant) {
    elUser.src = `${variant.src}`;
    setTimeout(() => {
        const robot = robotChooser()
        elRobot.src = `./images/${robot}.svg`
        const userChoice = elUser.src.split("/").pop().split(".")[0]; 
        const winner = findWinner(userChoice, robot);
            elStatus.innerText = `Win ${winner.toUpperCase()}`
    }, 1000)
}