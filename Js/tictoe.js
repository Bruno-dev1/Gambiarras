const prompt = require("prompt-sync")();
let tabuleiro = [" "," "," "," "," "," "," "," "," "]
//funcion
const funcaoia = () => {
    let livres = []

    for (let i = 0; i < tabuleiro.length; i++) {
        if (tabuleiro[i] == " ") {
            livres.push(i)
        }
    }

    if (livres.length == 0) return

    const escolha = livres[Math.floor(Math.random() * livres.length)]
    tabuleiro[escolha] = "O"
}
const verificarVencedor = () => {
    if (
        (tabuleiro[0] != " " && tabuleiro[0] == tabuleiro[1] && tabuleiro[1] == tabuleiro[2]) ||
        (tabuleiro[0] != " " && tabuleiro[0] == tabuleiro[4] && tabuleiro[4] == tabuleiro[8])
    ) {
        return true
    } else {
        return false
    }
}


while(true)
{
    const resp = prompt("Em qual posição")
    
    if( resp.toUpperCase() == "X")
        break
    else if (resp>0 && resp<10)
    {
        if(tabuleiro[resp-1] == " ")
        {
        tabuleiro[resp -1] = "X"
        funcaoia()
        console.log(tabuleiro) 
        const vencedor = verificarVencedor()
        if( vencedor == true)
        {
            console.log( "venceu")
            break
        }
        }else{
            continue
        }
        
        
    }
        
        
    {
        continue
    }
    
    
}
