const altura = 5
for(let i = 1; i <= altura;i++){
    let linha = 30 + (altura-i)
    console.log(" ".repeat(linha)+"*".repeat(i*2))
}