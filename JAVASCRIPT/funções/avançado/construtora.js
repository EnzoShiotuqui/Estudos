function Pessoa(nome, sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome
    
    this.metodo = function(){
        console.log(this.nome + ": Olá")
    }
}

const p1 = new Pessoa("enzo", "shiotuqui")
const p2 = new Pessoa ("alice", "Shiotuqui")

console.log(p1)
console.log(p2)