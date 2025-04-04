export function findWinner(user, robot) {
    const userChoice = user.split("/").pop().split(".")[0]; 
    if (userChoice === robot) {
        return "tied";
    } else if (
        (userChoice === "tosh" && robot === "qaychi") ||
        (userChoice === "qogoz" && robot === "tosh") ||
        (userChoice === "qaychi" && robot === "qogoz")
    ) {
        return "user";
    } else {
        return "robot";
    }
}
