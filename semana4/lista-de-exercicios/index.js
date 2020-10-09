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

    //exercício 3
    //resposta:
        /*No inicio de codigo é dado um array preenchido - "numeros" - e mais dois vazios - "array1" e "array2".
        Logo após há um elemento de loop, onde se usa a condicional if... else... para divididos em duas categorias os elementos do primeiro array "numeros" em, impares e pares. Os pares são adicionados (uma copia) no "array1" e os impares ao "array2".
        Depois há trés (3) console.log. 
        No primeiro e impresso a quantidade de elementos do primeiro array "numeros" => Quantidade total de números 14.
        No segundo sera impresso a quantidade de elementos no "array1" após finalização do loop => 6.
        O terceiro sera o mesmo que o "array1" so que no "array2" => 8.
        Ou seja, esse código serve quando se tem um conjunto com números tanto pares quanto impares juntos e misturados e você quer separa-los em novos conjuntos de pares e impares.*/

    //exercício 4
    //resposta:
        /*Começamos com um array chamado "numeros" e duas variaveis let uma "numero1" com valor - infinify - e outra "numero2" valor - 0.
        Depois temos um elemento de loop for... of..., onde se tem dois if, no primeiro if, cada elemento do array "numeros" que for menor que infinito, entrara na variavel "numero1", ou seja, todos eles entraram.
        No segundo if todos os elementos do array "numeros" que for maior que 0 entrara na variavel "numero2", ou seja o unico que não entrara na variavel sera o -10.
        Primeiro console.log => 25, 12, 55, 64, 121, 44, 11, 84, 51, 48, 14, 73, 111, 283, 1, 99, 13, 31, 83, 131, 1, 1.1, -10, 25, 1590.
        Segundo console.log => 25, 12, 55, 64, 121, 44, 11, 84, 51, 48, 14, 73, 111, 283, 1, 99, 13, 31, 83, 131, 1, 1.1, 25, 1590.*/