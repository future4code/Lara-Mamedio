    //interpretação de código
//exercicio 1

a = 10
b = 10

console.log(b)

b = 5
console.log(a, b)

//resposta:
    //10
    //10 10

//exercicio 2

a = 10
b = 20
c = a
b = c
a = b

console.log(a, b, c)

//resposta:
    //10 10 10

    //escrita de código
//exercicio 1

let nome
let idade 

console.log (typeof nome)
console.log (typeof idade)
//pois não foi atribuido nenhum valor a variavel

nome = prompt ("qual é seu nome?")
idade = prompt ("qual é a sua idade?")

console.log (typeof nome)
console.log (typeof idade)
//o tipo da variavel mudou, pois agora ela tem um valor atribuido a ela

console.log ("Olá", nome, ", voçê tem", idade, "anos.")

//exercicio 2

let nome2 = prompt ("Qual é o seu nome?")
let anime = prompt ("Qual é o seu anime favorito?")
let maisAssiste = prompt ("Qual você mais assiste?")
let manga = prompt("Qual é o seu manga favorito?")
let maisLe = prompt("Qual você mais le?")

console.log ("Qual é o seu nome?")
console.log ("resposta:", nome2)

console.log ("Qual é o seu anime favorito?")
console.log ("resposta:", anime)

console.log ("Qual você mais assiste?")
console.log ("resposta:", maisAssiste)

console.log ("Qual é o seu manga favorito?")
console.log ("resposta:", manga)

console.log ("Qual você mais le?")
console.log ("resposta:", maisLe)

//exercicio 3

let array = ['lasanha', 'frango', 'bolo', 'chocolate', 'panqueca']

console.log (array)

console.log ("Essas são as minhas comidas preferidas:")
console.log (array [0])
console.log (array [1])
console.log (array [2])
console.log (array [3])
console.log (array [4])

let usuario = prompt ("Qual a sua comida preferida?")

array [1] =usuario

console.log ("Essas são as minhas comidas preferidas:")
console.log (array [0])
console.log (array [1])
console.log (array [2])
console.log (array [3])
console.log (array [4])

//exercicio 4

let perguntaArray = ["Gosta de anime?", "Gosta de manga?", "Gosta de k-pop?"]

let respostaArray = [true, true, false]

console.log (perguntaArray[0], respostaArray[0])
console.log (perguntaArray[1], respostaArray[1])
console.log (perguntaArray[2], respostaArray[2])