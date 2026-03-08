const altura = 8
for(let i = 1; i <= altura;i++){
    let linha = 30 + (altura-i)
    console.log("*".repeat(i)+" ".repeat(linha))
}