import { listaDePlantas } from "./api.js";
import { atualizaLista } from "./api.js";
import { renderizaLista } from "./main.js";


const apagaItens =  async (bloco) => {
    const lista = await listaDePlantas()
    const item =  await lista.map((e) => e.Tipo).indexOf(bloco.querySelector(".tituloPlanta").textContent)
    lista.splice(item,1)
    console.log(lista)
    atualizaLista(await lista)
    renderizaLista()
}

export {apagaItens}