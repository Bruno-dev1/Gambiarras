const prompt = require("prompt-sync")();
console.log("Choose your dice");
console.log("d20");
console.log("d12");
console.log("d8");
console.log("d6");
console.log("d4");

const dice = prompt("What dice do you want to roll?");
const roll = prompt("How many times do you want to roll?");
let acumulador = 0
for(let i = 1; i <= roll; i++){
   
switch (dice) {
    case "d20":
        const d20 = (Math.floor(Math.random() * 20) + 1)
        console.log("Rolling d20");
        console.log("It's a " + d20 );
        acumulador += d20
        break;
    case "d12":
        const d12 = (Math.floor(Math.random() * 12) + 1)
        console.log("Rolling d12");
        console.log("It's a " + d12);
        acumulador += d12
        break;
    case "d8":
        const d8 = (Math.floor(Math.random() * 8) + 1)
        console.log("Rolling d8");
        console.log("It's a " + d8);
        acumulador += d8
        break;
    case "d6":
        const d6 = (Math.floor(Math.random() * 6) + 1)
        console.log("Rolling d6");
        console.log("It's a " + d6);
        acumulador += d6
        break;
    case "d4":
        const d4 = (Math.floor(Math.random() * 4) + 1)
        console.log("Rolling d4");
        console.log("It's a " + d4);
        acumulador += d4
        break;
    default:
        console.log("Invalid dice");
}

}
console.log("Total: " + acumulador);