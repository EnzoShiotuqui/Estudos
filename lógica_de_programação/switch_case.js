// mesma teoria do if e else, porém para códigos grandes



function getDiaSemanaTexto (diaSemana) {
    let diaSemanaTexto
    switch(diaSemana){
        case 0:
         diaSemanaTexto = "domingo"
        return diaSemanaTexto
        case 1:
            diaSemanaTexto = 'Segunda'
        return diaSemanaTexto
        case 2:
            diaSemanaTexto = "terça"
        return diaSemanaTexto
        case 3:
            diaSemanaTexto = "Quarta"
        return diaSemanaTexto
        case 4: 
            diaSemanaTexto = "Quinta"
        return diaSemanaTexto
        case 5:
            diaSemanaTexto = "Sexta"
        return diaSemanaTexto
        case 6:
            diaSemanaTexto = "Sabádo"
        default:
            diaSemanaTexto = ''
         return diaSemanaTexto
    }
}

const data = new Date('1987-04-26 00:00:00')
let diaSemana = data.getDay()
const diaSemanaTexto = getDiaSemanaTexto(diaSemana)

console.log(diaSemana, diaSemanaTexto)