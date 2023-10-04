listaDePlantas = async () => {
    const lista =  await fetch("https://cbssoares.github.io/pesquisador/data/plantas.json")
    const listaAdaptada = await lista.json()
    return(listaAdaptada)

}



