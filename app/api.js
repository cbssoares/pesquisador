const listaDePlantas = (async () => {
    const lista = await fetch("https://cbssoares.github.io/pesquisador/data/plantas.json", {method: "GET"})
    const listaAdaptada = await lista.json()
    var listaDados = await listaAdaptada.plantas

    return listaDados
})



export default listaDePlantas()

