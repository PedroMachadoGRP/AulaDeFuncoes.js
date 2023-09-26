//b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é maior ou igual ao segundo.

function numero(numero1,numero2) {
    let comparar = numero1 >= numero2
    
    return comparar
}
const pergunta = Number(prompt("Insira um número"))
const pergunta2 = Number(prompt("Insira um segundo número"))
console.log(numero(pergunta, pergunta2));

