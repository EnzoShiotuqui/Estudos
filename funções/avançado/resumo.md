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
-------------------------------------------------------------------------------------------------
**parametrôs de função**
parametro de uma função seria algo que ela vai receber para que ocorra oq está no corpo dela 
por padrão, uma função já vem com a varivave arguments, que recebe tudo aquilo que foi dado a um parametro

function funcao (){
    console.log(arguments)
}
funcao(1, 2, 3)