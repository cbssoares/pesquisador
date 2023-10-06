const listaDePlantas = (async () => {
    const lista = await fetch("https://api.jsonbin.io/v3/b/652045820574da7622b554f4", { method: "GET" })
    const listaAdaptada = await lista.json()
    var listaDados = await listaAdaptada.record.plantas

    return listaDados
})

const atualizaLista = (listaAtualizada) => {
    fetch("https://api.jsonbin.io/v3/b/652045820574da7622b554f4", {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json', "X-Master-Key": "$2a$10$Qfwwy.ebivC7icPtrGbROOsJ9BMFoxqzPtiOhsen7qQZUBniPqLG6", "X-Bin-Versioning": "false"
        }, body: JSON.stringify({ plantas: listaAtualizada })
    })
}




export { listaDePlantas }
export { atualizaLista }

