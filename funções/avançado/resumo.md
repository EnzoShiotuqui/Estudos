*Declarações de funções (função hoisting)*

**hoisting = a declaração será elevada para o topo do arquivo**

function falaOi(){
    console.log("olá")
}

**first-classic objects (objetos de primeira classe)**
seria criar uma variavel e declarar uma função

const souUmDado = function(){
    console.log("sou um dado")
}

**arrow function**
mesma coisa da função hoisting, porém tem diferença com o uso do THIS

const funcaoArrow = () => {
    console.log("sou uma arrow function")
}


**dentro de um objeto**

const obj = {
    falar: function (){
        console.log("estou falando")
    }
}

obj.falar()
-------------------------------------------------------------------------------------------------------------------------
**parametrôs de função**
parametro de uma função seria algo que ela vai receber para que ocorra oq está no corpo dela 
por padrão, uma função já vem com a varivave arguments, que recebe tudo aquilo que foi dado a um parametro

function funcao (){
    console.log(arguments)
}
funcao(1, 2, 3)
<<<<<<< HEAD
------------------------------------------------------------------------------------------------------------
**funções fábrica**
São funções que retornam objetos
As vezes é usada a palavra THIS
THIS = é usada para se referir ao objeto que está sendo executado no código, ou seja quem chamar o objeto 

function criaPessoa (nome, sobrenome){
    return{
        nome,
        sobrenome,
        fala: function(assunto){
            return `${this.nome} está ${assunto}`
        }
    }
}

const p1 = criaPessoa("enzo", "shiotuqui") 
console.log(p1.fala("falando de js")) //p1 no caso seria o THIS
---------------------------------------------------------------------------------------------------------------------
**função construtora**
Mesma coisa da função fábrica mas cria NOVOS atributos (new)
O nome da função tem que ter letra maiuscula
sempre tem que usar o NEW
NEW = cria um objeto vazio e direciona o this ao novo objeto e retorna o objeto a uma variavel ( não precisa usar return )

funcition Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
}

const p1 = new Pessoa("enzo", "shiotuqui")
=======
--------------------------------------------------------------------------------------------------------------------------
**funções callback**
São funções que ocorrem quando alguma ação ocorre ou finaliza 

function f1 (callback) {
    setTimeout(function(){
        console.log("f1")
        if (callback) callback()
    },rand())
    
}
function f2 (callback) {
    setTimeout(function(){
        console.log("f2")
        if(callback) callback()
    },rand())
}
function f3 (callback) {
    setTimeout(function(){
        console.log("f3")
        if(callback) callback()
    },rand())
}

f1(function(){
    f2(function(){
        f3(function(){
            console.log("Olá Mundo")
        })
    })
})
---------------------------------------------------------------------------------------------------------------
**funçõs imediatas ou iife**
>>>>>>> 23dca8d7e2d423098f697cfd29a4fd5b891416aa
