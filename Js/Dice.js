consol.log("Choice your dice");
console.log("d20")
console.log("d12")
console.log("d8")
console.log("d6")
console.log("d4")
const dice = prompt("what dice do you want to roll?");

switch (dice) {
    case "d20":
        console.log("Rolling d20");
        console.log("It's a " + Math.floor(Math.random() * 20) + 1);
        break;
    case "d12":
        console.log("Rolling d12");
        console.log("It's a " + Math.floor(Math.random() * 12) + 1);
        break;
    case "d8":
        console.log("Rolling d8");
        console.log("It's a " + Math.floor(Math.random() * 8) + 1);
        break;
    case "d6":
        console.log("Rolling d6");
        console.log("It's a " + Math.floor(Math.random() * 6) + 1);
        break;
    case "d4":
        console.log("Rolling d4");
        console.log("It's a " + Math.floor(Math.random() * 4) + 1);
        break;
    default:
        console.log("Invalid dice");
        break;
}