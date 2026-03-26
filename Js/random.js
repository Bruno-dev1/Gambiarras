const prompt = require("prompt-sync")()
const num = Math.floor(Math.random()*100)+1

while(true){
     let resp = Number(prompt("Adivinhe o numero: "))
    if (resp == num ){
        break
    }else if(resp > num){
        console.log("----Aposta muito alta----")
    }else{
        console.log("----Aposta muito baixa----")
    }
}
console.log("Parabens voce ganhou")