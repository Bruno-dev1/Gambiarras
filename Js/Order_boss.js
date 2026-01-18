const prompt= require("prompt-sync")();
console.log("-".repeat(30) + "A degolificada aparece imperando terror em seu coração" + "-".repeat(30)); 
let vida_jogador = 15
let vida_boss = 45
const ca_boss = 15

//combate
do {
console.log("O que deseja fazer?");
console.log("1 - Atacar");
console.log("2 - Fugir");
const escolha = prompt("Qual a sua escolha?");

if (escolha == 1) {
    const dice = Math.floor(Math.random()*20+1)
    if (dice >= ca_boss) {
        console.log("Você acertou o ataque");
        const dano = Math.floor(Math.random()*10+1)
        vida_boss -= dano
        console.log("Vida do boss: " + vida_boss);
    } else {
        console.log("Você errou o ataque");
        console.log (" ela vai te atacar");
        const dano = Math.floor(Math.random()*6+1)
        vida_jogador -= dano
        console.log("Vida do jogador: " + vida_jogador);
    }
}else if (escolha == 2) {
    console.log("Você fugiu");

}}while (vida_jogador > 0 && vida_boss > 0)

    if (vida_jogador <= 0) {
        console.log("Você perdeu");
    } else if (vida_boss <= 0) {
        console.log("Você ganhou");
    }