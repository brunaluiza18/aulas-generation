const leia = require('readline-sync')

let idade

//Entrada de dados
console.log("Digite sua idade: ")
idade = leia.questionInt()// idade = leia.questionInt("Digite sua idade: ")

//Processamento - IF
// IF é SE
if(idade < 18){
    console.log("Voce não pode dirigir!")
}

console.log("Fim do Programa")