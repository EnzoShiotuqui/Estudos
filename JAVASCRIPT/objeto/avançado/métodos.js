const produto = {
    nome: "caneca",
    preco: 1.50,
    material: "porcelana"
}

const p2 = Object.assign({}, produto,{material: "cera"}) //cria um novo objeto, primeiro parametro é o obj vazio, dps oq vc quer colocar nele 
console.log(produto)
console.log(p2)


const p1 = Object.getOwnPropertyDescriptor(produto, "nome") //retorna propriedades de uma chave do objeto
console.log(p1)