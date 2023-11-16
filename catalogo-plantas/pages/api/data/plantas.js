export const plantas = async () => {
  const lista = await fetch("https://pesquisador-seven.vercel.app/api/tempo", { method: "GET"})
    const listaAdaptada = await lista.json()
    return listaAdaptada
}