//get = obter valor
// set = configura valor

function Produto(nome, preco, estoque){
    this.nome = nome,
    this.preco = preco,

    
    Object.defineProperty(this, 'estoque',{
        enumerable: true, // mostra a chave
        configurable: false, // se pode reconfigurar a chave
        get: function(){
            return estoque
        },
        
        set:function(valor){
            if(typeof valor != 'number'){
               throw new TypeError("Só pode numero")
            }
            this.estoque = valor
        }
    }
)}

function criaProduto(nome){
    return{
        get nome(){
            return nome
        },
        set nome(valor){
            nome = valor
        }
    }
}



 const p1 = new Produto('camisa', 20, 3)
 console.log(p1)

