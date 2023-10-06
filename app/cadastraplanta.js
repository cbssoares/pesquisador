import {listaDePlantas} from "./api.js"
import {atualizaLista} from "./api.js"

const formulario = document.getElementById("formCadastraPlanta")




formulario.addEventListener('submit',  async (e) =>{
    cadastraPlanta(e)
})


const cadastraPlanta =  async (form) => {
    form.preventDefault()
    const listaNova = await listaDePlantas()
    console.log(await listaDePlantas())
    const novaPlanta = {
        imagem: form.target.imagem.value,
        Tipo: form.target.nome.value,
        Pote: form.target.pote.value,
        Unidade:form.target.unidade.value,
        Preço:form.target.preco.value
    }
    await listaNova.push(novaPlanta)
    listaNova.sort(function (a, b) {
        if (a.Tipo.toLowerCase() < b.Tipo.toLowerCase()) {
          return -1;
        }
        if (a.Tipo.toLowerCase > b.Tipo.toLowerCase) {
          return 1;
        }
        return 0;
      })
    atualizaLista(listaNova)
    
}
