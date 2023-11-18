const listaDePlantas = (async () => {
    const lista = await fetch("http://localhost:3000/api/tempo", { method: "GET"})
    const listaAdaptada = await lista.json()
    var listaDados = await listaAdaptada.plantas
    console.log(await listaDados)

    return listaDados
})

const atualizaLista = (listaAtualizada) => {
    fetch("http://localhost:3000/api/tempo", {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
        }, body: JSON.stringify(listaAtualizada)
    })
}




export { listaDePlantas }
export { atualizaLista }

