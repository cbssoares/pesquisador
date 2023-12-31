import { listaDePlantas } from "./api.js";
import { atualizaLista } from "./api.js";
import { renderizaLista } from "./main.js";


const apagaItens = async (bloco) => {
    if (window.confirm("Tem certeza que quer apagar este item ?")) {
        const lista = await listaDePlantas()
        const item = await bloco.classList[1]
        lista.splice(item, 1)
        console.log(lista)
        atualizaLista(await lista)
        renderizaLista()
    }

}

export { apagaItens }