var blocoPlantas = document.getElementById("bloco-plantas")
var pesquisaInput = document.querySelector('.pesquisa')
console.log(pesquisaInput)
import { listaDePlantas } from "./api.js"
import { apagaItens } from "./apagaPlantas.js"
import { recebeInformacao } from "./editaPlanta.js"



//  Constroi  blocos com informações das plantas
async function  formaBloco(e, chave) {
    const bloco = document.createElement("div")
    bloco.classList.add('divPlanta',  chave)
    bloco.innerHTML =
        `
        <span class="material-icons iconeX icones ">
        cancel
        </span>
        <img  class='imagemPlanta'src=${e.imagem} alt="Imagem da planta">
        <h2 class="tituloPlanta">${e.Tipo}</h2>
        <p><strong>Pote:</strong> ${e.Pote}</p>
        <p><strong>Unidade:</strong> ${e.Unidade}</p>
        <p><strong>Valor:</strong> ${e.Preço}</p>
        <span class="material-symbols-outlined icones iconeEdit">
        edit
        </span>
        `
    blocoPlantas.appendChild(bloco)

}

// Renderiza a lista de de plantas 

const renderizaLista = async () => {
    blocoPlantas.innerHTML = ''
    const listaBlocos = await listaDePlantas()
    await listaBlocos.forEach((e) => formaBloco(e, listaBlocos.indexOf(e)))
    const botaoApaga = document.querySelectorAll(".iconeX")
    const iconeEdit = document.querySelectorAll('.iconeEdit')
    botaoApaga.forEach((e) => e.addEventListener("click", () => apagaItens(e.parentNode)))
    iconeEdit.forEach((e) => e.addEventListener("click", () => recebeInformacao(e.parentNode, "edita")))

}






renderizaLista()



pesquisaInput.addEventListener('keyup', async () => {
    await salvaResultado(pesquisaInput.value)
})


// mecanismo de pesquisa

async function salvaResultado(busca) {
    if (busca == "") {
        renderizaLista()
    } else {
        const listaBlocos = await listaDePlantas()
        const listaFiltrada = await listaBlocos.filter(plantas => plantas.Tipo.toLowerCase().includes(busca.toLowerCase()))
        blocoPlantas.innerHTML = ''
        await listaFiltrada.forEach(e => formaBloco(e, listaBlocos.indexOf(e)))
        const botaoApaga = document.querySelectorAll(".iconeX")
        const iconeEdit = document.querySelectorAll('.iconeEdit')
        botaoApaga.forEach((e) => e.addEventListener("click", () => apagaItens(e.parentNode)))
        iconeEdit.forEach((e) => e.addEventListener("click", () => recebeInformacao(e.parentNode, "edita")))
    }

}

export { renderizaLista }







