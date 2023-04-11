const nomes = ["enzo", "alice", "luana", "henrique"]

console.log(nomes)
console.log(nomes.length)

nomes.push("Thanos")
console.log(nomes)

nomes.unshift("familia shiotuqui")
console.log(nomes)

nomes.pop()
console.log(nomes)

nomes.shift()
console.log(nomes)

//delete nomes[0]
//console.log(nomes)

console.log(nomes.slice(0, 2))