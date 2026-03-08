const prompt = require("prompt-sync")();
const verificador =(num)=>{
    let veri = num.toString().split("").reverse()
    let soma1 = 0
    let soma2 = 0
    for(let i = 1; i <= veri.length; i++){
        if(i%2==0){
            let duplo = 2*veri[i-1]//duplica os verificadores
            if(duplo>=10){
                let duplosep = duplo.toString().split("")
                for (let duplos of duplosep){
                    soma2 += Number(duplos)
                }
            }else{
                soma2 += duplo
            }

        }else{
            soma1 +=Number(veri[i-1])
        }
        }
    const total = soma1 + soma2
    return total
    }
    console.log(verificador(4003600000000014))
    


