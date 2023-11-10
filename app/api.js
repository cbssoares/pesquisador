const listaDePlantas = (async () => {
    const lista = await fetch("http://192.168.1.15:8080/plantas", { method: "GET" })
    const listaAdaptada = await lista.json()
    var listaDados = await listaAdaptada.plantas
    console.log(await listaAdaptada)

    return listaDados
})

const atualizaLista = (listaAtualizada) => {
    fetch("http://192.168.1.15:8080/plantas", {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json', 'id': '6969'
        }, body: JSON.stringify({plantas: listaAtualizada, id:"6969"})
    })
}




export { listaDePlantas }
export { atualizaLista }

