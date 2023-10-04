blocoPlantas = document.getElementById("bloco-plantas")
pesquisaInput = document.querySelector('.pesquisa')
console.log(pesquisaInput)

listaDePlantas = (async () => {
    const lista =  await fetch("https://cbssoares.github.io/pesquisador/data/plantas.json")
    const listaAdaptada = await lista.json()
    const listaDados = listaAdaptada.plantas
    await listaDados.forEach( e => {
        const bloco = document.createElement("div")
        bloco.classList.add('divPlanta')
        bloco.innerHTML =`<img src="" alt="">
        <h2>Nome: ${e.Tipo}</h2>
        <p>Pote: ${e.Pote}</p>
        <p>Unidade: ${e.Unidade}</p>
        <p>Valor: ${e.Preço}</p>`
        blocoPlantas.appendChild(bloco)
        
    
        })
}
)



listaDePlantas()





pesquisaInput.addEventListener('change', salvaResultado)

function salvaResultado() {
    let resultado = pesquisaInput.value
}



async function  listRender() {
    
}

    listRender()

