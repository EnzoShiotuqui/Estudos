function saudacao(nome){
    console.log(`Bom dia ${nome}!`)
}
saudacao('enzo')


function bomDia(nome){
    return `Bom dia ${nome}`
}
const dia = bomDia('enzo')
console.log(dia)


function conta(x, y){
    return x + y
}
console.log(conta(2,2))


const raiz = function (n){
    return n**0.5
}

console.log(raiz(9))