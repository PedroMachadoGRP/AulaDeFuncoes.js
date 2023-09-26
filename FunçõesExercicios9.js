function soma(num1,num2) {
    let soma = num1 + num2
    return soma
}

const pergunta = Number(prompt("Insira um número que você deseja que seja usado em todas as operações basicas "))
const pergunta2 = Number(prompt("Insira um segundo número que você deseja que seja usado em todas as operações basicas "))
const somafinal = soma(pergunta,pergunta2)
console.log("Soma:" ,somafinal);

function subtração(num1,num2) {
    let subtração = num1 - num2
    return subtração
}

const subtraçãoFinal = subtração(pergunta,pergunta2)
console.log("Diferença:", subtraçãoFinal);

function multiplicação(num1,num2) {
    let multiplicação = num1 * num2
    return multiplicação
}

const multiplicaçãofinal = multiplicação(pergunta,pergunta2)
console.log("Multiplicação:", multiplicaçãofinal);

function divisão(num1,num2) {
    let divisão = num1 / num2
    return divisão
}

const divisãoFinal = divisão(pergunta,pergunta2)
console.log("divisão:", divisãoFinal);







