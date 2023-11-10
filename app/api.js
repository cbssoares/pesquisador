const listaDePlantas = (async () => {
    const lista = await fetch("http://localhost:3000/plantas", { method: "GET" })
    const listaAdaptada = await lista.json()
    var listaDados = await listaAdaptada

    return listaDados
})

const atualizaLista = (listaAtualizada) => {
    fetch("http://localhost:3000/plantas", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        }, body: JSON.stringify({ plantas: listaAtualizada })
    })
}




export { listaDePlantas }
export { atualizaLista }

