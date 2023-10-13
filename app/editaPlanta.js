import { atualizaLista, listaDePlantas } from "./api.js"
import { renderizaLista } from "./main.js"
const iconeApaga = document.querySelector(".iconeApaga")

const formulario = document.querySelector("#formEditaBloco")
const blocoFormulario = document.querySelector("#editaBloco")

const recebeInformacao =  async (e) =>{
    var lista = await listaDePlantas()
    var item =  await lista.map((e) => e.Tipo).indexOf(e.querySelector(".tituloPlanta").textContent)
    console.log(lista[item])
    formulario.nome.setAttribute("value", lista[item].Tipo)
    formulario.pote.setAttribute("value", lista[item].Pote)
    formulario.unidade.setAttribute("value", lista[item].Unidade)
    formulario.preco.setAttribute("value", lista[item].Preço)
    formulario.imagem.setAttribute("value", lista[item].imagem)
    blocoFormulario.classList.add('visivel')
    blocoFormulario.classList.remove('invisivel')
    formulario.addEventListener("submit", async (e) => {
        e.preventDefault()
        lista[item].Tipo = e.target.nome.value
        lista[item].Pote = e.target.pote.value
        lista[item].Unidade = e.target.unidade.value
        lista[item].Preço = e.target.preco.value
        lista[item].imagem = e.target.imagem.value
        atualizaLista(await lista)
        blocoFormulario.classList.remove('visivel')
        blocoFormulario.classList.add('invisivel')
        await renderizaLista()
        
    })
}

iconeApaga.addEventListener('click', () => {
    blocoFormulario.classList.remove('visivel')
    blocoFormulario.classList.add('invisivel')
})



export {recebeInformacao}