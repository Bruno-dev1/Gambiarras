const prompt = require("prompt-sync")();

const dice=(num)=>{
    let resp = ""
    let acumulador = 0
    for(let i = 1 ; i <=num;i++){
        let dado = Math.floor(Math.random()*6)+1
        let dados= ""
        switch(dado){
            case 1:
                dados = "⚀"
                acumulador++
                break;
            case 2:
                dados = "⚁"
                acumulador+=2
                break;
            case 3:
                dados = "⚂"
                acumulador+=3
                break;
            case 4:
                dados = "⚃"
                acumulador+=4
                break;
            case 5:
                dados = "⚄"
                acumulador+=5
                break;
            case 6:
                dados = "⚅"
                acumulador+=6
                break;
            default:
                console.log("Erro")
                return
        }
        resp += dados + "\n"
    }
    console.log(resp)
    console.log("Acumulador: " + acumulador)
}
const num = prompt("Quantos dados deseja rolar? ")
dice(num)