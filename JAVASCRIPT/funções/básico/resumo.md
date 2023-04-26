função seria um encurtador de tarefa, na qual usamos um valor nela e ela retorna ou calcula algo com a informação passada 
------------------------------------------------------------------------------------------------------------------------
estrutura padrão de uma função

function <nome da função>(input de dados){
    corpo da função
}
nome()
--------------------------------------------------------------------------------
Para uma função para ser usada precisa ter ()  no final do corpo dela

e a função pode receber parametros, que servem para acresentar dados a uma função 

function olá (nome) {
    console.log(´olá ${nome´})
}
olá(enzo)
----------------------------------------------------------------------------------------------------------------------------------------------------
Podemos também retornar valor em uma função para que ela fique armazenada em uma variavel 

function numero(numero){
     return 123456
}
const num = numero()

quando é usado "return" nada abaixo do return será executado, é usado como fim da função
-----------------------------------------------------------------------------------------------------
Outros jeitos de criar uma função: 

função dentro da variavel:
const raiz = function (n) {
    return n**0.5
}
console.log(raiz(9))


arrow function = mesma coisa da função normal, porém sem uso da palavra "function"
const raiz = (n) => {
    return n ** 0.5 
}
