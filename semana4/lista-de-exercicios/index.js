//1. interpretação de código
//legenda: nesse exercício o que será impresso no console, estara após o este sinal => (igual seguido de maior) e terminara no . (ponto).

    //exercício 1
    //resposta:
        /*Você insere o atual valor do dolar na const "cotacao".
        No return é acresentado o R$ e a "cotacao" e o "valorEmDolar" são multiplicados. 
        Na const "meuDinheiro" se chama a função pra executala e o valor que você quer converter para reais você coloca em "valorEmDolar". 
        No console.log é impresso o valor em reais com o R$ junto, ou seja, é uma função para converter dinheiro de dolar para reais => R$552,98.*/

    //exercício 2
    //resposta:
        /*Nessa função dependento do tipo de investimento que você escolhe, fazer você rebera o valor que você investiu multiplicado pelo quanto aquele tipo de investimento vale. 
        Na função se tem o "tipoDeInvestimento" - que pode ser poupança, renda fixa, CDB ou ações, graças ao elemento switch - onde cada tipo, há seu valor específico sendo multiplicado pelo valor investido. 
        Caso o "tipoDeInvestimento" inserido não exista ou estiver errado, havera uma menssagem que avisara ao usuario que a informação esta incorreta - essa menssagem é o default do switch.
        P.s.: no switch a sintase -break- ira fazer com que o switch so rode ate chegar ao tipoDeInvestimento que pertence.
        O return salva a let "valorAposInvestimento" que no switch, caso tudo esteja certo, recebeu o valor investido multiplicado.
        Tanto na const "novoMontante" quanto na "segundoMontante", é chamado a função e atribuido o tipo de investimento e um valor a ser multiplicado.
        No primeiro console.log que recebe a const "novoMontante" sera impresso o valor de => 165.
        Já na segunda como o tipoDeInvestimento inserido não existe entre as possibilidades sera impresso o alert => TIPO DE INVESTIMENTO INFORMADO INCORRETO!*/