const prompt = require("prompt-sync")()
const num = Math.floor((Math.random()*100+1))
let resp = Number(prompt("Adivinhe o numero"))
while(true){
    resp = Number(prompt("Adivinhe o numero"))
    if (resp == num ){
        break
    }else if(resp > num){
        console.log("Aposta muito alta")
    }else{
        console.log("aposta muito baixa")
    }
}
console.log("Parabens voce ganhou")