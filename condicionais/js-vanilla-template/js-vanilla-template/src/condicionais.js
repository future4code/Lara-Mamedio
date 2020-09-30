//CONDICIONAIS

    //exercícios de interpretação
    //exercício 1

    /*const respostaDoUsuario = prompt("Digite o número que você quer testar")
    const numero = Number(respostaDoUsuario)

    if(numero % 2 === 0) {
        console.log("Passou no teste.")
    } else {
        console.log("Não passou no teste.")
    }

    //Resposta
//o teste serve para ver se o número digitado é par ou impar. Caso ele seja par sera impresso "Passou no teste", caso seja impar sera impresso "Não passou no teste"


    //exercício 2

    let fruta = prompt("Escolha uma fruta")
    let preco

    switch (fruta) {
        case "Laranja":
            preco = 3.5
            break;
        case "Maçã":
            preco = 2.25
            break;
        case "Uva":
            preco = 0.30
            break;
        case "Pêra":
            preco = 5.5
            break; // BREAK PARA O ITEM c.
        default:
            preco = 5
            break;
    }

    console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

    //Resposta
//a. Serve para mostrar o nome e o preço de fruta que o usuario escolheu
//b. "O preço da fruta Maçã é R$2.25"
//c. "O preço da fruta Pêra é R$5"


    //exercício 3

    const numero = Number(prompt("Digite o primeiro número."))

    if(numero > 0) {
    console.log("Esse número passou no teste")
        let mensagem = "Essa mensagem é secreta!!!"
    }

    console.log(mensagem)

    //Resposta 
//a. Esta pedindo para o usuario digitar um numero e lhe dando um input onde ele deve ser digitar, esse numero sera armazenado na variavel 'numero' e sera tansformado no tipo numero.
//b. Se for 10, não aparecera nada, caso seja escrito -10, então aparecera a menssagem "Esse número passou no teste".
//c. Havera, pois a variavel 'mensagem' pertence ao escopo da condição if, então, não pode ser acessado pelo console.log, que esta fora do escopo do if.


    //exercícios de escrita de codigo
    //exercício 4

    let idade = Number(prompt ("Digite a sua idade"))
    
    if (idade >= 18) {
        console.log ("Você pode dirigir.")
    }   else {
        console.log ("Você não pode dirigir.")
    }

    //exercício 5

    let turno = prompt ("Qual o seu turno? M (Matutino), V (Vespertino) ou N (Noturno)").toLowerCase()
    let matutino = "m"
    let vespertino = "v"

    if (matutino === turno) {
        console.log ("Bom Dia!")
    }   else if (vespertino === turno) {
        console.log ("Boa Tarde!")
    }   else {
        console.log ("Boa Noite!")
    }

    //exercício 6

    let turno = prompt ("Qual o seu turno? M (matutino), V (Vespertino) ou N (Noturno)").toLowerCase()
    let matutino = "m"
    let vespertino = "v"

    switch (turno) {
        case 'm':
            console.log ("Bom Dia!")
            break
        case 'v':
            console.log ("Boa Tarde!")
            break
        default:
            console.log ("Boa Noite!")
            break
    } 

    //exercício 7
   
    let genero = prompt ("Qual é o genero?").toLowerCase()
    let generoNecessario = "fantasia"
    let preco = Number(prompt ("Qual é o preço?"))

    if ((genero === generoNecessario) && preco < 15) {
        console.log ("Bom filme!")
    }   else {
        console.log ("Escolha outro filme :(")
    }


    //desafios
    //DESAFIO 1

    let genero = prompt ("Qual é o genero?").toLowerCase()
    let generoNecessario = "fantasia"
    let preco = Number(prompt ("Qual é o preço?"))
    let snack = prompt ("Qual snack você ira comprar?")
    

    if ((genero === generoNecessario) && preco < 15) {
        console.log ("Bom filme! Com", snack)
    }   else {
        console.log ("Escolha outro filme :(")
    }*/

    //DESAFIO 2

    let nome = prompt ("Seu nome completo")
    let tipoDeJogo = prompt ("Qual o tipo de jogo? Sendo IN internacional; e DO doméstico;").toLowerCase()
    let etapaDoJogo = prompt ("Qual a etapa do jogo? Sendo SF semi-final; DT decisão de terceiro lugar; e FI final").toLowerCase()
    let categoria = Number(prompt ("Qual a categoria? Pode ser as opções 1, 2, 3 ou 4;"))
    let quantidadeDeIngressos = Number(prompt ("Qual a quantidade de ingressos desejado?"))

    const SF1 = 1320
    const SF2 = 880
    const SF3 = 550
    const SF4 = 220
    const DT1 = 660
    const DT2 = 440
    const DT3 = 330
    const DT4 = 170
    const FI1 = 1980
    const FI2 = 1320
    const FI3 = 880
    const FI4 = 330

    console.log ("---Dados da compra---")
    console.log ("Nome do cliente:", nome)
    console.log ("Tipo do jogo:", tipoDeJogo)
    console.log ("Etapa do jogo:", etapaDoJogo)
    console.log ("Categoria:", categoria)
    console.log ("Quantidade de Ingressos:", quantidadeDeIngressos)
    console.log ("---Valores---")

    if (tipoDeJogo === "do" ) {
        if (etapaDoJogo === "sf" ) {
            if (categoria === 1 ) {
                console.log ("Valor do ingresso: R$", SF1)
                console.log ("Valor total: R$", SF1 * quantidadeDeIngressos )
            }   else if (categoria === 2) {
                console.log ("Valor do ingresso: R$", SF2)
                console.log ("Valor total: R$", SF2 * quantidadeDeIngressos )
            }   else if (categoria === 3) {
                console.log ("Valor do ingresso: R$", SF3)
                console.log ("Valor total: R$", SF3 * quantidadeDeIngressos )
            }   else {
                console.log ("Valor do ingresso: R$", SF4)
                console.log ("Valor total: R$", SF4 * quantidadeDeIngressos )
            } 

        }   else if (etapaDoJogo === "dt") {
            if (categoria === 1 ) {
                console.log ("Valor do ingresso: R$", DT1)
                console.log ("Valor total: R$", DT1 * quantidadeDeIngressos )
            }   else if (categoria === 2) {
                console.log ("Valor do ingresso: R$", DT2)
                console.log ("Valor total: R$", DT2 * quantidadeDeIngressos )
            }   else if (categoria === 3) {
                console.log ("Valor do ingresso: R$", DT3)
                console.log ("Valor total: R$", DT3 * quantidadeDeIngressos )
            }   else {
                console.log ("Valor do ingresso: R$", DT4)
                console.log ("Valor total: R$", DT4 * quantidadeDeIngressos )
            } 

        }   else if (etapaDoJogo === "fi") {
            if (categoria === 1 ) {
                console.log ("Valor do ingresso: R$", FI1)
                console.log ("Valor total: R$", FI1 * quantidadeDeIngressos )
            }   else if (categoria === 2) {
                console.log ("Valor do ingresso: R$", FI2)
                console.log ("Valor total: R$", FI2 * quantidadeDeIngressos )
            }   else if (categoria === 3) {
                console.log ("Valor do ingresso: R$", FI3)
                console.log ("Valor total: R$", FI3 * quantidadeDeIngressos )
            }   else {
                console.log ("Valor do ingresso: R$", FI4)
                console.log ("Valor total: R$", FI4 * quantidadeDeIngressos )
            }   
        }

    }    else if (tipoDeJogo === "in") {
            if (categoria === 1 ) {
                console.log ("Valor do ingresso: R$", SF1 * 4.1) 
                console.log ("Valor total: R$", (SF1 * quantidadeDeIngressos) * 4.1 )
            }   else if (categoria === 2) {
                console.log ("Valor do ingresso: R$", SF2 * 4.1)
                console.log ("Valor total: R$", (SF2 * quantidadeDeIngressos) * 4.1)
            }   else if (categoria === 3) {
                console.log ("Valor do ingresso: R$", SF3 * 4.1)
                console.log ("Valor total: R$", (SF3 * quantidadeDeIngressos) * 4.1)
            }   else {
                console.log ("Valor do ingresso: R$", SF4 * 4.1)
                console.log ("Valor total: R$", (SF4 * quantidadeDeIngressos) * 4.1)
            } 

        }   else if (etapaDoJogo === "dt") {
            if (categoria === 1 ) {
                console.log ("Valor do ingresso: R$", DT1 * 4.1)
                console.log ("Valor total: R$", (DT1 * quantidadeDeIngressos) *4.1)
            }   else if (categoria === 2) {
                console.log ("Valor do ingresso: R$", DT2 * 4.1)
                console.log ("Valor total: R$", (DT2 * quantidadeDeIngressos) * 4.1)
            }   else if (categoria === 3) {
                console.log ("Valor do ingresso: R$", DT3 * 4.1)
                console.log ("Valor total: R$", (DT3 * quantidadeDeIngressos) * 4.1)
            }   else {
                console.log ("Valor do ingresso: R$", DT4 * 4.1)
                console.log ("Valor total: R$", (DT4 * quantidadeDeIngressos) * 4.1)
            } 

        }   else if (etapaDoJogo === "fi") {
            if (categoria === 1 ) {
                console.log ("Valor do ingresso: R$", FI1 * 4.1)
                console.log ("Valor total: R$", (FI1 * quantidadeDeIngressos) * 4.1)
            }   else if (categoria === 2) {
                console.log ("Valor do ingresso: R$", FI2 * 4.1)
                console.log ("Valor total: R$", (FI2 * quantidadeDeIngressos) * 4.1)
            }   else if (categoria === 3) {
                console.log ("Valor do ingresso: R$", FI3 * 4.1)
                console.log ("Valor total: R$", (FI3 * quantidadeDeIngressos) * 4.1)
            }   else {
                console.log ("Valor do ingresso: R$", FI4 * 4.1)
                console.log ("Valor total: R$", (FI4 * quantidadeDeIngressos) * 4.1)
            }   
        }