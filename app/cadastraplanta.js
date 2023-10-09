import { listaDePlantas } from "./api.js"
import { atualizaLista } from "./api.js"

const formulario = document.getElementById("formCadastraPlanta")




formulario.addEventListener('submit', async (e) => {
  cadastraPlanta(e)
})


const cadastraPlanta = async (form) => {
  form.preventDefault()
  let imagem = form.target.imagem.value
  let nome = form.target.nome.value
  let pote = form.target.pote.value
  let unidade = form.target.unidade.value
  let preco = form.target.preco.value
  const listaNova = await listaDePlantas()
  const novaPlanta = {
    imagem: imagem,
    Tipo: nome,
    Pote: pote,
    Unidade: unidade,
    Preço: preco
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
  imagem = ""
  nome = ""
  pote = ""
  unidade = ""
  preco = ""
  console.log(imagem,nome,pote,unidade,preco)
  window.alert('Item cadastrado com sucesso')
  window.location.reload()

}
