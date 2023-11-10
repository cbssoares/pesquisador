const listaDePlantas = (async () => {
    const lista = await fetch("https://listadeplantas-86d9fbc0f283.herokuapp.com/plantas", { method: "GET" })
    const listaAdaptada = await lista.json()
    var listaDados = await listaAdaptada

    return listaDados
})

const atualizaLista = (listaAtualizada) => {
    fetch("https://listadeplantas-86d9fbc0f283.herokuapp.com/plantas", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        }, body: JSON.stringify({ plantas: listaAtualizada })
    })
}




export { listaDePlantas }
export { atualizaLista }

