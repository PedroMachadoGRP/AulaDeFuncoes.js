//2 Leia o código abaixo

let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

//a. Explique o que essa função faz e qual é sua utilidade

//A utilidade dessa fução é dizer se a frase escrita pelo usuario tem a palavra cenoura em minusculo caso tenha sera true caso contrario false

/*b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
i.   Eu gosto de cenoura
ii.  CENOURA é bom pra vista
iii. Cenouras crescem na terra 
*/
/*
i. ira dizer que ela é verdadeira(true),pois ela esta escrita corretamente e esta em minusculo
ii. ira dizer que ela é falsa(false),pois ela esta escrita toda em maiuscula
iii. ira dizer que ela é falsa(false),pois elas esta escrita errada e a letra inicial está em maiusculo
*/