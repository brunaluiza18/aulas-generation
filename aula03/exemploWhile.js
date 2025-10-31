const leia = require("readline-sync");

let continua = true;
let numero1, numero2, resultado;

while (continua) {
    numero1 = leia.questionInt("Digite primeiro valor: ");

    numero2 = leia.questionInt("Digite segundo valor: ");

    resultado = numero1 + numero2;

    console.log("O resultado da soma é: " + resultado);

    console.log("\n++++++++++++++++MENU++++++++++++++++++");
    continua = leia.keyInYNStrict("\nDeseja continuar? ");
    //y => true//verdadeiro | n => false/falso
    //.keyInYNStrict opção de leitura pra saber se é verdadeiro ou falso
    console.log("++++++++++++++++++++++++++++++++++");
}

// sim / yes(Y) | 