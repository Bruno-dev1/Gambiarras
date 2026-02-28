const prompt = require("prompt-sync")();
let list = [];
let verificar = true;

do {
    console.log("\nEscolha uma opção");
    console.log("1 - Adicionar");
    console.log("2 - Remover");
    console.log("0 - Sair");

    const escolha = Number(prompt("Qual a sua escolha? "));

    switch (escolha) {
        case 1:
            const item = prompt("Qual o item que deseja adicionar? ");
            list.push(item);
            break;

        case 2:
            const tirar = Number(prompt("Qual o item que deseja remover? (Indice) "));
            
            if (tirar > 0 && tirar <= list.length) {
                list.splice(tirar - 1, 1);
            } else {
                console.log("Índice inválido!");
            }
            break;

        case 0:
            console.log("Saindo...");
            verificar = false;
            break;

        default:
            console.log("Opção inválida!");
    }

    console.log("\nLista atual:");
    for (let i = 0; i < list.length; i++) {
        console.log(`${i + 1} - ${list[i]}`);
    }

} while (verificar === true);