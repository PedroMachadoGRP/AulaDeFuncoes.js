function inicio(inicio1) {
    const facil = inicio1.length
    return facil
}
const pergunta = prompt("Insira um texto que você gosta");
const final = inicio(pergunta);
console.log("o total de caracteres do seu texto é :",final);

function inicio2(inicio1) {
    const facil1 = inicio1.toUpperCase()
    return facil1
}
 
const final2 = inicio2(pergunta);
console.log("Seu texto em maiusculo ficou assim :",final2);




