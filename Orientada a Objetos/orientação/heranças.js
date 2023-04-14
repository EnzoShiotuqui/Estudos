class DispositivoEletronico{
    constructor(nome){
        this.nome = nome
        this.ligado = false
    }
    ligar(){
       if(this.ligado){
        console.log(`${this.nome} está ligado`)
        return
       } 
       this.ligado = true
    }
    desligar(){
        if(!this.ligado){
            console.log(`${this.nome} desligado`)
            return
        }
        this.ligado = false
    }
}

class SmartPhone extends  DispositivoEletronico { // as heranças da disposito foram passadas para SmartPhone
    constructor(nome, cor, modelo){
        super(nome)  //chamar o construtor da classe pai
        this.cor = cor // acresentadando informações 
        this.modelo = modelo
    }
} 

const s1 = new SmartPhone("Iphone", "preto", "14 pro MAX" )
console.log(s1)