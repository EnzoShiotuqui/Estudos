function rand(max, min){
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaOU(msg, tempo){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            if(typeof msg !== "string"){
                reject("CAI NO ERRO")
                return
            }
            resolve(msg.toUpperCase() + "- Passei na promisse")
            return
        }, tempo)
    })
}

async function executa(){
    try {
        const fase1 = await esperaOU("fase 1", rand())
        console.log(fase1)
    
        const fase2 = await esperaOU("fase 2", rand())
        console.log(fase2)
    
        const fase3 = await esperaOU("fase 3", rand())
        console.log(fase3)
    } catch(e){
        console.log(e)
    }
}
executa()