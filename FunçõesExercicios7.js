function numeros(num1,num2) {
    const divisão = num1  % num2
    const resposta = divisão === 0
    return resposta
}

const pergunta = prompt("Insira um número")
const pergunta2 = prompt("Insira um segundo número")
const final = numeros(pergunta,pergunta2)
console.log(final);