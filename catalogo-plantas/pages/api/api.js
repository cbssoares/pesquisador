const listaDePlantas = (async () => {
    const lista = await fetch("https://getpantry.cloud/apiv1/pantry/ddc41205-af29-4dbf-ada1-f7acca55d4d8/basket/plantas", { method: "GET"})
    const listaAdaptada = await lista.json()
    var listaDados =  await listaAdaptada.plantas
    console.log(await listaDados)

    return listaDados
})

const atualizaLista = (listaAtualizada) => {
    fetch("", {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
        }, body: JSON.stringify(listaAtualizada)
    })
}




export { listaDePlantas }
export { atualizaLista }

