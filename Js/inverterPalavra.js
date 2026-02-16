const carrinho = [
  { nome: "Teclado", preco: 100 },
  { nome: "Mouse", preco: 50 },
  { nome: "Monitor", preco: 800 }
];
let soma = 0;
for (let i = 0; i < carrinho.length; i++) {
  soma += carrinho[i].preco;
 
} 
console.log(soma);