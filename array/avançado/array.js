const nomes = ["enzo", "thanos", "alice"]
const novo = [...nomes]

novo.pop()
console.log(nomes)
console.log(novo)


//split 

console.log( "--------------------------------------------------------------------------------------")
const nomess = "Enzo Shiotuqui"
const nome = nomess.split(" ")

console.log(nome)


//join 

console.log( "--------------------------------------------------------------------------------------")
const frutas = ["maça", "banana", "manga"]
const fruta = frutas.join()

console.log(fruta)


//splice

console.log( "--------------------------------------------------------------------------------------")
const shio = ["enzo", "alice", "thanos",]

shio.splice(0, 1) //escolhi o índice 1 e removi o índice 1
console.log(shio)

shio.splice(0, 0, "Luana") //adicionei luana no índice 0
console.log(shio)


console.log( "--------------------------------------------------------------------------------------")
//concatenar array 
const a1 = [1,2,3]
const a2 = [4,5,6]

const a3 = a1.concat(a2)

console.log(a3)