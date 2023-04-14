**PROMISSSES**

Seriam processos que já estão acontecendo e que podem ser encadeados para ocorrer em sequencia, sem preocurar com o tempo 
E elas ocorrem em paralelo, e quando terminarem exibem as informações na tela

function esperaAi(msg, tempo){
    return new Promise((resolve, reject)=>{ // declarar a promisses com parametro resolve que resolve a função e reject que rejeita e lança um erro 
        setTimeout(() =>{
            resolve(msg)
        },tempo)
    })
}

No encadeamento da função é usado o termo THEN, que só sera executado oq tem dentro dele quando a promisse for executada, e ele encadeia a promisse

esperaAi("Frase 1", rand(1,3))
.then(resposta =>{
    console.log(resposta)
    return esperaAi("frase 2", rand(1,3))
})
.then(resposta =>{
    console.log(resposta)
    return esperaAi("frase 2", rand(1,3))
})
.then(resposta =>{
    console.log(resposta)
    return esperaAi("frase 3", rand(1,3
        ))
})


O termo catch captura o erro que ocore junto ao REJECT 
.catch(e =>{
    console.log("erro", e)
})
----------------------------------------------------------------------------------------------------------------------------------------------------------
**Async e Await**