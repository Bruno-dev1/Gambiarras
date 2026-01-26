const prompt = require("prompt-sync")();

const AlunosNotas = [
    {
        aluno: "Bruno",
        nota: [10, 4, 8, 6, 5]
    },
    {
        aluno: "João",
        nota: [9, 7, 2, 9, 9, 10]
    }
];

const media = (notas) => {
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }
    return soma / notas.length;
};

let aluno; // declarada fora

do {
    console.log("\nEscolha um aluno:");
    console.log("1 - Bruno");
    console.log("2 - João");
    console.log("0 - Sair");

    aluno = prompt("Qual aluno deseja escolher? ");

    switch (aluno) {
        case "1":
            console.log("A média de Bruno é: \n" + media(AlunosNotas[0].nota).toFixed(1));
            break;

        case "2":
            console.log("A média de João é: \n " + media(AlunosNotas[1].nota).toFixed(1));
            break;

        case "0":
            console.log("Saindo...");
            break;

        default:
            console.log("Aluno não encontrado");
    }

} while (aluno !== "0");
