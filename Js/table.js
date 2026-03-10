const p = ["V","V","F","F"]
const q = ["V","F","V","F"]



const conctencao =(p,q)=>
{
    let lista = ""
    for (let i = 0; i < p.length; i++) {
        if(p[i]=="V" && q[i]=="V")
        {
            lista = lista +" "+p[i]+" "+q[i]+" "
            lista = lista + "V\n"
        }
        else
        {
            lista = lista +" "+p[i]+" "+q[i]+" "
            lista = lista + "F\n"
        }
    }
    console.log(lista)
}
conctencao(p,q)


