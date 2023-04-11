const nomes = {
    nome1 : "enzo",
    nome2 : "Alice",
    nome3 : "thanos",
}

console.log(nomes)
console.log(nomes.nome1)


function criaPessoa (nome, sobrenome, idade){
    return {
        nome : nome,
        sobrenome: sobrenome,
        idade : idade,
    }
}
const pessoa1 = criaPessoa("enzo", "Shiotuqui", 18)
console.log(pessoa1)

const pessoa = {
    nome: "enzo",
    sobrenome: "shiotuqui",
 
    fala(){
        console.log(`${this.nome} ${this.sobrenome} está falando oi`)
    }

}
pessoa.fala()