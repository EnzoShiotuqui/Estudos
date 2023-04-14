//Mesma coisa da função contrutora, porém escrita de uma outra maneira 

class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome
        this.sobrenome = sobrenome
    }
    falar(){
        console.log(`${this.nome} está falando`)
    }
    comer(){
        console.log(`${this.nome} está comendo`)
    }
    beber(){
        console.log(`${this.nome} está bebendo`)
    }
}

const p1 = new Pessoa("enzo", "Shiotuqui")
const p2 = new Pessoa("alice", "Shiotuqui")
const p3 = new Pessoa("luana", "Shiotuqui")
const p4 = new Pessoa("henrique", "Shiotuqui")
console.log(p1)
console.log(p2)
console.log(p3)
console.log(p4)
