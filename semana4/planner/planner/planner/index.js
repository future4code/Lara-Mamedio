function criarTarefa() {
    const minhaTarefa = document.getElementById("tarefa")
    const diaEscolhido = document.getElementById("dias-semana").value
    const minhaLista =  document.getElementById(diaEscolhido)

    if (minhaTarefa.value === "") {
        alert ("Insira uma tarefa!")
    } else {
        minhaLista.innerHTML += `<li> ${minhaTarefa.value} </li>`
        
    }
    minhaTarefa.value = ""

    console.log(diaEscolhido)
}