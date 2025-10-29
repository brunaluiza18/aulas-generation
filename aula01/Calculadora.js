//importando a biblioteca
const leia = require('readline-sync')

//Variaveis
let celsius, fahrenheit

//entrada de dados
celsius = leia.questionFloat("insira a temperatura em celsius: ")

//Processamento
fahrenheit = celsius * 1.8 + 32// * é multiplicação

//Saida de dados
console.log("A temperatura em fahrenheit é: " + fahrenheit)
//console.log("A temperatura em fahrenheit é: %f", Fahrenheit)