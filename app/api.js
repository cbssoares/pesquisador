const listaDePlantas = (async () => {
    const lista = await fetch("https://getpantry.cloud/apiv1/pantry/872e29e3-2574-4be6-9b55-d262402179f6/basket/plantas", { method: "GET" })
    const listaAdaptada = await lista.json()
    var listaDados = await listaAdaptada.plantas

    return listaDados
})

const atualizaLista = (listaAtualizada) => {
    fetch("https://getpantry.cloud/apiv1/pantry/872e29e3-2574-4be6-9b55-d262402179f6/basket/plantas", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        }, body: JSON.stringify({ plantas: listaAtualizada })
    })
}




export { listaDePlantas }
export { atualizaLista }

