
//first class function
const souUmDado = function(){
    console.log("sou um dado")
}
souUmDado()

//arrow function
const funcaoArrow = () => {
    console.log("sou uma arrow function")
}

funcaoArrow()

//função objeto
const obj = {
    falar: function (){
        console.log("estou falando")
    }
}

obj.falar()

//parametro

function funcao (){
    let total = 0
    for (let arguemento of arguments){
        total += arguemento
    }
    console.log(total)
}
funcao(1, 2, 3, 4, 5)


//função callback

function rand(min = 1000, max =3000){
    const num = Math.random * (max - min ) + min
    return Math.floor(num)
}

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


