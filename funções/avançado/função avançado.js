
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

