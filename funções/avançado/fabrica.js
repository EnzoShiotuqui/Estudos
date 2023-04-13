function criaPessoa (nome, sobrenome, a, p){
    return{
        nome,
        sobrenome,

        get  nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },

        set nomeCompleto(valor){
            valor = valor.split(' ')
            this.nome = valor.shift()
            this.sobrenome = valor.join(' ')
        },

        fala: function(assunto){
            return `${this.nome} está ${assunto}`
        },

        altura: a,
        peso: p,

        get imc(){
            const indice = this.peso/(this.altura**2)
            return indice.toFixed(2)
        },
    }
}

const p1 = criaPessoa("enzo", "shiotuqui",1.7, 65)
p1.nomeCompleto = 'Alice Migani Shiotuqui'
console.log(p1.nome)
console.log(p1.sobrenome)
console.log(p1.fala("cansado"))