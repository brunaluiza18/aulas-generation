const leia = require('readline-sync')

let nota1, nota2, media

nota1 = leia.questionFloat("Digite a primeira nota: ")

nota2 = leia.questionFloat("\nDigite a primeira nota: ")

//= -> atribuição
//== -> igualdade | 5 == 5
//Processamento 
media = (nota1 + nota2) / 2
if (media >= 6) {
    console.log("Parabéns, voce passou!")
} 
//else { //else nao aceita ()
    else if(media == 5){
        console.log("Voce esta de exame")
    }
    else{
    console.log("Voce reprovou!")
}