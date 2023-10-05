var blocoPlantas = document.getElementById("bloco-plantas")
var pesquisaInput = document.querySelector('.pesquisa')
console.log(pesquisaInput)
import listaDePlantas from "./api.js"

const renderizaLista = async () => {
    const listaBlocos = await listaDePlantas
    await listaBlocos.forEach(e => {
        const bloco = document.createElement("div")
        bloco.classList.add('divPlanta')
        bloco.innerHTML = `<img  class='imagemPlanta'src=${e.imagem} alt="">
        <h2>Nome: ${e.Tipo}</h2>
        <p>Pote: ${e.Pote}</p>
        <p>Unidade: ${e.Unidade}</p>
        <p>Valor: ${e.Preço}</p>`
        blocoPlantas.appendChild(bloco)


    }
    )
}

renderizaLista()



pesquisaInput.addEventListener('keyup', async () => {
    await salvaResultado(pesquisaInput.value)
})


const testeobj = [{ Tipo: "rosa" }, { Tipo: "lixo" }]

async function salvaResultado(busca) {
    if (busca == "") {
        renderizaLista()
    } else {
        const listaBlocos = await listaDePlantas
        const listaFiltrada = await listaBlocos.filter(plantas => plantas.Tipo.toLowerCase().includes(busca.toLowerCase()))
        blocoPlantas.innerHTML = ''
        await listaFiltrada.forEach(e => {
            const bloco = document.createElement("div")
            bloco.classList.add('divPlanta')
            bloco.innerHTML = `<img class='imagemPlanta' src=${e.imagem} alt="">
            <h2>Nome: ${e.Tipo}</h2>
            <p>Pote: ${e.Pote}</p>
            <p>Unidade: ${e.Unidade}</p>
            <p>Valor: ${e.Preço}</p>`
            blocoPlantas.appendChild(bloco)
        })
    }

}









