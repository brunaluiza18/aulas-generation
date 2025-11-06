export class Conta {

//ATRIBUTOS DA CLASSE
//Private indica que o atributo só é acessivel dentro da Classe 
private _numero: number  
private _agencia: number
private _tipo: number
private _titular: string
private _saldo: number

// METODO CONSTRUTOR 
//THIS. é chamando a classe atual | um representante da conta | componentes privados
constructor (numero: number, agencia: number, tipo: number,titular: string, saldo: number){
    this._numero = numero // this => conta => conta.numero | só usado no classe
    this._agencia = agencia
    this._tipo = tipo
    this._titular = titular
    this._saldo = saldo
}

//MÉTODO DE ACESSO - GET E SER -> GETTERS E SETTERS

public set numero(novoValor: number){ // SET -> ATUALIZAR DE FORMA SEGURA, OS ATRIBUTOS
this._numero = novoValor
}
public get numero(){ // GET -> RECUPERA/MOSTRA DE FORMA SEGURA O VALOR DO ATRIBUTO
    return this._numero
}
 public get agencia() {
        return this._agencia;
    }

    public set agencia(agencia: number) {
        this._agencia = agencia;
    }

    public get tipo() {
        return this._tipo;
    }

    public set tipo(tipo: number) {
        this._tipo = tipo;
    }

    public get titular() {
        return this._titular;
    }

    public set titular(titular: string) {
        this._titular = titular;
    }

    public get saldo() {
        return this._saldo;
    }

    public set saldo(saldo: number) {
        this._saldo = saldo;
    }



}