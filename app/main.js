var blocoPlantas = document.getElementById("bloco-plantas")
var pesquisaInput = document.querySelector('.pesquisa')
console.log(pesquisaInput)
import {listaDePlantas} from "./api.js"

function formaBloco(e){
    const bloco = document.createElement("div")
    bloco.classList.add('divPlanta')
    bloco.innerHTML = `<img  class='imagemPlanta'src=${e.imagem} alt="">
    <h2 class="tituloPlanta">${e.Tipo}</h2>
    <p><strong>Pote:</strong> ${e.Pote}</p>
    <p><strong>Unidade:</strong> ${e.Unidade}</p>
    <p><strong>Valor:</strong> ${e.Preço}</p>`
    blocoPlantas.appendChild(bloco)
}

const renderizaLista = async () => {
    const listaBlocos = await listaDePlantas()
    await listaBlocos.forEach((e) => formaBloco(e))
}



renderizaLista()



pesquisaInput.addEventListener('keyup', async () => {
    await salvaResultado(pesquisaInput.value)
})



const testeobj = [{ Tipo: "rosa" }, { Tipo: "lixo" }]

async function salvaResultado(busca) {
    if (busca == "") {
        blocoPlantas.innerHTML = ''
        renderizaLista()
    } else {
        const listaBlocos = await listaDePlantas()
        const listaFiltrada = await listaBlocos.filter(plantas => plantas.Tipo.toLowerCase().includes(busca.toLowerCase()))
        blocoPlantas.innerHTML = ''
        await listaFiltrada.forEach(e => formaBloco(e))
    }

}









