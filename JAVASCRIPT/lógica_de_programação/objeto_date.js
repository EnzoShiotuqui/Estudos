//date são baseados no valor de tempo que é o número de milisegundos desde 1º de Janeiro de 1970

// const tresHoras = 60 * 60 * 3 * 1000
// const umDia =  60 * 60 * 24 * 1000
// const data = new Date (0 + tresHoras + umDia); // contado a partir de 1/1/1970 (0)

const data = new Date () 
// os parametrôs são= ano, mês, dia, hora, minuto e segundo
//os meses são de 0 a 11 
console.log(data.toString()) // mostra o horário

console.log(data.getHours())