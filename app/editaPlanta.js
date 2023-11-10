import { atualizaLista, listaDePlantas } from "./api.js"
import { cadastraPlanta } from "./cadastraplanta.js"
import { renderizaLista } from "./main.js"
const iconeApaga = document.querySelector(".iconeApaga")

const formulario = document.querySelector("#formEditaBloco")
const blocoFormulario = document.querySelector("#editaBloco")

formulario.addEventListener("submit", (e) => {
    e.preventDefault()
})

const recebeInformacao =  async (e, funcao) =>{
    console.log(funcao)
    const enviar = async (e) => {
        console.log("erro")
       
    }

    if (funcao == "edita"){
    
        var lista = await listaDePlantas()
        var item =  await e.classList[1]
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
    else {
        formulario.nome.setAttribute("value", "")
        formulario.pote.setAttribute("value", "")
        formulario.unidade.setAttribute("value", "")
        formulario.preco.setAttribute("value", "")
        formulario.imagem.setAttribute("value", "")
        formulario.removeEventListener("submit", async (e) => {
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
        formulario.addEventListener("submit", async (e) => cadastraPlanta(e)
        )
    
}
}

iconeApaga.addEventListener('click', () => {
    blocoFormulario.classList.remove('visivel')
    blocoFormulario.classList.add('invisivel')
})



export {recebeInformacao}