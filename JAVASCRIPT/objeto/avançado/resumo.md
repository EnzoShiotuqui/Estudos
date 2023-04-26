*defineProperty e defineProperties*

Usar usar esse termo podemos mudar as propriedades de uma chave no objeto, tornando fixa ou varivael

e usa alguns termos padrões

 Object.defineProperty(this, 'estoque',{
        enumerable: true, // mostra a chave
        value: estoque, // valor que ela recebe
        writable: false, // se pode mudar esse valor 
        configurable: false // se pode reconfigurar a chave
 })

 Já a object proprieties pode configurar cada chave de u jeito 

-------------------------------------------------------------------------------------------------------------------------------------
*métodos para objeto*

object.freeze = congela o objeto 
object.keys = retorna as chaves dos objetos 
object.DefineProperty = retorna uma propriedade
object.defineproperties = retorna várias propriedades 
object.getOwnPropertyDescripor = Retorna as propriedades de uma das chaves do objeto 
-----------------------------------------------------------------------------------------------------------------------------------------
**Prototype**

Toda função construtora possui um Object.prototype 
e dentro dele está a chave: __proto__