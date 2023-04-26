//bloco try recebe um código e caso há um erro nesse código ele manda para um bloco catch

//bloco catch recebe o erro do bloco try e dentro ele é executado caso o erro seja real 

//bloco throw lança um erro caso uma condição seja errada ou falsa


try {
    console.log(naoexisto)
}catch(err){
    console.log("não Existe a variavel")
}


function soma(x, y){
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw('x e y precisam ser numeros')
    }
    return x + y
}

try{
    console.log(soma(2, 2))
    console.log(soma('2', 2))
} catch(err){
    console.log(err)
}