// Declaração da função
function somar(a: number, b:number): number {
    
    //lógica da função

    let resultado: number = a + b // 2 + 2 => resultado = 4

    return resultado
}

function logar (usuario: number | string): void{// | => pipe / ||

    if (typeof(usuario) === "number" )
        console.log("\nVoce esta acessando seu Insta pelo seu celular");
    else
        console.log("\nVoce esta acessando o Insta pelo E-mail");
}




//CHAMADA DAS FUNÇOES
let valor: number = somar(7, 12)
let valor1: number = somar(6, 11)

console.log("O resultado da sua adição é: " + valor)
console.log("O resultado da sua adição é: " + valor1)

logar("bruna@generation")
