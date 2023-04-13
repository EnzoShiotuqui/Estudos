**declaração de array**
const nomes = ["enzo", "alice", "thanos"]
-------------------------------------------------------------------------

é possivel colocar um array numa varivael, porém tudo que eu mexer na varivale interfere no array
const novo = nomes

Para impedir é so dar spred operato
const nomes = ["enzo", "thanos"]
const novo = [...nomes] = criou uma cópia do array 
-----------------------------------------------------------------------------------------------
**converter string em array*

Para isso é usar o método SPLIT

const nomes = "Enzo Shiotuqui"
const nome = nomes.split(" ")


**converter array em string**

Para isso é usar o método JOIN

const frutas = ["maça", "banana", "manga"]
const fruta = frutas.join()
--------------------------------------------------------------------------------------------------------
**função SPLICE**
É uma função que junta algumas outras funções

Para declarar é do seguinte jeito 

nome.splice(índice, delete, )
indice seria qual elemento do array eu quero mexer
delete seria a quantidade de elementos que quero deletar ou alterar
------------------------------------------------------------------------------------------------------------
**concatenar array*
Como juntar array da forma correta 

const a1 = [1,2,3]
const a2 = [4,5,6]

const a3 = a1.concat(a2)
----------------------------------------------------------------------------------------------------------------
**funções array*

Função filter

