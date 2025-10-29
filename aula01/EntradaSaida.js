//importando a biblioteca
const leia = require('readline-sync')//pedindo pra acessar a biblioteca instalada

//declarando variaveis 
let nome, distancia

//Entrada de dados
console.log("Digite o seu nome: ")//console.log é o que o sistema mostra pro cliente 
nome = leia.question()

console.log("\nDigite a distancia percorrida em sua corrida: ")
distancia = leia.questionFloat()

// Saida de dados
console.log("\nBom dia, " + nome + ". A distancia percorrida foi de: " + distancia + "km.")
//console.log("\nA distancia percorrida foi de: " + distancia)

//6 inteiro
//6.0 decimal
//25.2