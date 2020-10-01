        //exercícios de interpretação de código
        //exercício 1
/*
let valor = 0
for(let i = 0; i < 5; i++) {
    valor += i
}
console.log(valor)

    //resposta
    // O que o código esta fazendo?: ele cria um loop, onde 'i' ira "crescer" de 0 até chegar a 5, fazendo que a variavel 'valor', também va de 0 a 5, após chegar a 5, a primeira parte do código acaba, e será impresso no console, apenas o valor final da variavel 'valor', ou seja, 5 

        //exercício 2

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
    if (numero > 18) {
        console.log(numero)
    }
}

    //resposta
    //a. O que vai ser impresso no console?: 
        /*
        19
        21
        23
        25
        27
        30
        */
    //b. Não é.


        //exercício de escrita de código
        //exercício 3

let arrayOriginal = [80, 224, 30, 130, 40, 60, 21, 57, 29, 70, 120, 5, 90, 103, 258, 110, 55]
/*
    //a.
for (let array of arrayOriginal) {
    console.log (array)
}

    //b.
for (let array of arrayOriginal) {
    console.log (array / 10)
}

    //c.
let arrayPar = []

for (let array of arrayOriginal){
    if (array % 2 === 0){
        arrayPar.push (array)
    }
}    
console.log (arrayPar)

    //d.
let i = 0

for (let array of arrayOriginal){
    console.log ("O elemento do índex", i++, "é:", array)
}
*/
    //e.
let valorMaximo = 250
let valorMinimo = 10

for (let array of arrayOriginal) {
    if (array > valorMaximo){
        console.log ("O maior é:", array)
    } else if (array < valorMinimo) {
        console.log ("O menor é:", array)
    }    
}