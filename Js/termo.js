const prompt = require("prompt-sync")()

const termos = [
    "CASAS", "LIVRO", "CARRO", "PAPEL", "PEDRA",
    "PLANO", "PRATO", "TRIGO", "GRAMA", "VENTO",
    "MARTE", "TERRA", "AGUDO", "CLARO", "FORTE",
    "FRACO", "DOIDO", "SABIO", "MAGIA", "NINHO",
    "SONHO", "RISCO", "DANCA", "PRAIA", "MUNDO",
    "TEMPO", "SORTE", "VERDE", "BRISA", "NOITE",
    "FELIZ", "AMIGO", "VERAO", "CHUVA", "NEVAR",
    "FUMAR", "COMER", "BEBER", "ANDAR", "OLHAR",
    "OUVIR", "VIVER", "CORAL", "LIMPO", "SUAVE",
    "ARDOR", "VALOR", "CALOR", "MENOR", "MAIOR"
]

const palavra = termos[Math.floor(Math.random() * termos.length)]

let ganhador = false

while (!ganhador)
{
    let resp = prompt("qual o termo: ").toUpperCase()

    if (resp.length !== 5)
    {
        console.log("Digite uma palavra com 5 letras!")
        continue
    }

    if (resp === palavra)
    {
        ganhador = true
    }
    else
    {
        let dica = ""

        for (let i = 0; i < palavra.length; i++)
        {
            if (resp[i] === palavra[i])
            {
                dica += resp[i] + " "   // certo no lugar
            }
            else if (palavra.includes(resp[i]))
            {
                dica += resp[i].toUpperCase()           // existe mas posição errada
            }
            else
            {
                dica += "_ "           // não existe
            }
        }

        console.log("Dica:", dica)
    }
}

console.log("vc ganhou 🎉")