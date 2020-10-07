const container = document.getElementById ("conteiner-de-posts")

function armazenarInformacao() {
    const titulo = document.getElementById ("titulo-post")
    const autor = document.getElementById ("autor-post")
    const conteudo = document.getElementById ("conteudo-post")
        
    const formulario = {
        titulo : titulo.value,
        autor : autor.value,
        conteudo : conteudo.value,
    }

    if (formulario.value !== "") {
        let lugarOndeImprimir = document.getElementById("conteiner-de-posts")
        lugarOndeImprimir.innerHTML += `<div> ${formulario.value}</div>`
    }

    console.log (formulario)
}