export function findWinner(user, robot) {
    if (user === robot) {
        return "tied";
    } else if (
        (user === "tosh" && (robot === "qaychi" || robot === "kaltakesak")) ||
        (user === "qogoz" && (robot === "tosh" || robot === "dog")) ||
        (user === "qaychi" && (robot === "qogoz" || robot === "kaltakesak")) ||
        (user === "kaltakesak" && (robot === "qogoz" || robot === "dog")) ||
        (user === "dog" && (robot === "qaychi" || robot === "tosh"))
    ) {
        return "user";
    } else {
        return "robot";
    }
}