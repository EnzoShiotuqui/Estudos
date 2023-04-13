objeto serve para agrupar informações em um unico bloco, oq ajuda em organização
--------------------------------------------------------------------------------------------------
é declarado com {}
const nomes {
    nome1 : "enzo",
    nome2 : "luana",
    nome3 : "alice",
    nome4 :"henrique",
}

e é possivel navegar pelo objeto com o nome do item 

nomes.nome1 = aparce o primeiro nome
-----------------------------------------------------------------------------------------------------
É possivel criar uma função que cria um objeto 

function criaPessoa (nome, sobrenome e idade){
    return {
        nome : nome,
        sobrenome: sobrenome
        idade : idade 
    }
}
-----------------------------------------------------------------------------------------------------------
É possivel criar uma funçaõ dentro do objeto:
const pessoa1 {
    nome: "enzo",
    idade: "18",

    fala(){
        console.log("ola mundo")
    }
}
pessoa1.fala()