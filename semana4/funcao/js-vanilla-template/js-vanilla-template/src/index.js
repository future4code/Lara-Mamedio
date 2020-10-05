    //exercícios de interpretação de código
    //exercício 1
/*
function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

    //resposta:
    //a. 10
    //   50
    //b. não apareceria nada, pois o return garda o resultado, mas não imprime o resultado em lugar nenhum

    //exercício 2

let arrayDeNomes = ["Darvas", "Caio", "João", "Paulinha", "Soter"];

const outraFuncao = function(array) {
    for (let i = 0; i < 2; i++) {    
        console.log(array[i])
    }
}
    
outraFuncao(arrayDeNomes)

    //resposta:
    //a. será impresso no console, apenas os 3 primeiros nomes, pois assim que chegar a (i = 2), ou seja array[2], os nomes pararam de ser impressos
    //b. será impresso:
    //Amanda
    //Caio

    //exercício 3

const metodo = (array) => {
    let arrayFinal = [];
      
    for (let x of array) {
        if (x % 2 === 0) {
            arrayFinal.push(x * x)
        }
    }
      
    return arrayFinal;
}

    //resposta:
    // tem um arrow function, onde se o numero no array for par, ele sera multiplicado por ele mesmo e depois esse resultado será adicionado no array. paresSegundaPotencia

    //exercício de escrita de código
    //exercício 4

function quemSou() {
    console.log ("Me chamo Lara, tenho 18anos, moro em São Paulo e sou estudante.")
}

quemSou()

let meusDados = function quemSouEu (nome, idade, cidade, estudante) {
        if (estudante === true) {
            estudante = ("sou")
        } else if (estudante === false) {
            estudante = ("não sou")
        }

    console.log ("Eu sou ", nome, ", tenho", idade, "anos, moro em", cidade, "e", estudante, "estudante.")
}

meusDados ("Lara", 18, "São Paulo", false)
*/
    //exercício 5

function somaDeDoisNumeros (a, b) {
    let resultado = a + b
    console.log (resultado)
}

somaDeDoisNumeros (30, 4)

function doisNumeros (a, b) {
    if (a > b) {
        console.log (a, "é maoir que", b)
    } else if (a === b) {
        console.log (a, "é igual a", b)
    } else {
        console.log (a, "não é nem maoir, nem igual a", b)
    }
}

doisNumeros (30, 10)

function dezRepeticoes (menssagem) {

    for (let i = 0; i < 10; i++) {
        console.log (menssagem)
    }
}

dezRepeticoes("eu sou uma banana feliz")

    //exercício 6