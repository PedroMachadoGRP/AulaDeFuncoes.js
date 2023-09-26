//b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (string), a idade (number), a cidade (string) e uma profissão (string). Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem com o template:

function informações(nome,idade,cidade,profissão) {
    const completo = ("Eu sou " + nome + " tenho " +idade + " anos , moro em " + cidade + " e sou " + profissão + " . ")
    return completo
    
}

const minhaInformações = informações("Pedro",17,"São Leopoldo","Desempregado")
console.log(minhaInformações);