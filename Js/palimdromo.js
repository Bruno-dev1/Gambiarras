const prompt = require("prompt-sync")();

palavra = prompt("Escreva uma palavra: ")
 const enigma = palavra.split("")
 let palavraInvertida =""
for(let i = enigma.length - 1; i >= 0; i--){
    palavraInvertida += enigma[i]
}

palavraInvertida == palavra ? console.log("Eh um palindromo") : console.log("Nao eh um palindromo")