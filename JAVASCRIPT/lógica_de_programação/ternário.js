//ternário serve para encurtar o código em if e else
// sua escrita é com ? : 
//(condição) ? valor_verdadeiro : valor_falso

const pontuação = 2000
// if(pontuação <= 1000){
//     console.log("usuário vip")
// } else {
//     console.log("usuário normal")
// }

const nivelUsuario = pontuação >= 1000 ? 'Usuário VIP' : 'Usuráio normal '
console.log(nivelUsuario)
