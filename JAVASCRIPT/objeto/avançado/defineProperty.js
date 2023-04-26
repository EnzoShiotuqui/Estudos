//defineProperty

function Produto(nome, preco, estoque){
    Object.defineProperty(this, 'estoque',{
        enumerable: true, // mostra a chave
        value: estoque, // valor que ela recebe
        writable: false, // se pode mudar esse valor 
        configurable: false // se pode reconfigurar a chave
    })

Object.defineProperties(this, {
    nome: {
        enumerable: true,
        value: nome,
        writable: true,
        configurable:true
    },
    preco:{
        enumerable:true,
        value:preco,
        writable:true,
        configurable:true
    },
})
}
const p1 = new Produto('camisa', 20, 3)
console.log(p1)
const p2 = new Produto('blusa', 50,3)
console.log(p2)
