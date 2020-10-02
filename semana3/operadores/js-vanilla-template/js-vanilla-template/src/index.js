    //exercícios de interpretação
    //exercício 1

    const bool1 = true
    const bool2 = false
    const bool3 = !bool2
    
    let resultado = bool1 && bool2
    console.log("a. ", resultado)
        
    resultado = bool1 && bool2 && bool3
    console.log("b. ", resultado)
        
    resultado = !resultado && (bool1 || bool1)
    console.log("c. ", resultado)
        
    console.log("e. ", typeof resultado)

    //resposta
//a. false
//b. false
//c. false
 //e. booleano

    //exercício 2


    let array
    console.log('a. ', array)
    
    array = null
    console.log('b. ', array)
    
    array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    console.log('c. ', array.length)
    
    let i = 0
    console.log('d. ', array[i])
    
    array[i+1] = 19
    console.log('e. ', array)
    
    const valor = array[i+6]
    console.log('f. ', valor)

    //resposta
//a. underfined
//b. null
//c. 11
//d. 0
//e. 20
//f. 26

    //exercícios de escrita
    //exercício 1

    let nome = prompt ("Qual é a sua idade?")
    let nomeAmige = prompt ("qual é a idade do seu BFF?")

    console.log ("Sua idade é maior do que a do seu BFF?", nome > nomeAmige)

    console.log ("A diferença de idade é: ", nome - nomeAmige)

    //exercício 2

    let par = prompt ("Digíte um número par")

    console.log (par / 2)
    //não há resto na divisão

    //caso seja esrito um número impar, o número que aparecera na tela será um número quebrado

    //exercício 3

    let listaDeTarefas = []

    let primeiraTarefas = prompt ("Digíte a primeiro tarefa do dia")

    let segundaTarefas = prompt ("Digíte a segunda tarefa do dia")

    let terceiraTarefas = prompt ("Digíte a terceira tarefa do dia")

    listaDeTarefas.push (primeiraTarefas)
    listaDeTarefas.push (segundaTarefas)
    listaDeTarefas.push (terceiraTarefas)

    console.log (listaDeTarefas)
    
    let indice = prompt ("Digite de 0 a 2 qual das tarefas já foi feita")

    listaDeTarefas.splice (Number(indice), 1)

    console.log (listaDeTarefas)

    //exercício 4

    let nomeDoUsuario = prompt ("Digíte o seu nome")
    let emailDoUsuario =prompt ("Digíte o seu e-mail")

    console.log ("O e-mail", emailDoUsuario, " foi cadastrado com sucesso. Seja bem-vinda(o), ", nomeDoUsuario, "!")