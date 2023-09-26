function calcularMedia(pergunta1, pergunta2) {
    const soma = pergunta1 + pergunta2 
    const média = soma / 2 
    return média
}

const pergunta1 = Number(prompt("Insira o primeiro número para calcular sua média"))
const pergunta2 = Number(prompt("Insira o segundo número para calcular a sua média"))

const resulato = calcularMedia(pergunta1,pergunta2)
console.log(resulato);

