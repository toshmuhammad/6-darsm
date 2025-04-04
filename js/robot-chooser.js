export function robotChooser() {
    const hands = ["tosh", "qaychi", "qogoz"];
    const randomIndex = Math.trunc(Math.random() * hands.length);
    return hands[randomIndex];
}