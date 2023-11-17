import { useState } from "react"
import BlocoPlantas from "./blocoplantas.jsx"
import { listaDePlantas } from '../api/api.js'
import { atualizaLista } from "../api/api.js"
const listaP = await listaDePlantas()


export default function App() {


    const[lista, setlista] = useState(listaP)

    const apagaItens = async (bloco) => {
        if (window.confirm("Tem certeza que quer apagar este item ?")) {
            console.log(bloco)
            const item = bloco.dataset.chave 
            listaP.splice(item, 1)
            console.log(listaP)
            atualizaLista(listaP)
            setlista(listaP)
    
        }
    
    }

    function salvaResultado(busca) {
        if (busca == "") {
            setlista(listaP)
        } else {
            console.log(busca)
            const listaFiltrada = listaP.filter(plantas => plantas.Tipo.toLowerCase().includes(busca.toLowerCase()))
            console.log(listaFiltrada)
            setlista(listaFiltrada)
            
            
        }
    
    }
    
    return (
            <main className="principal">
                <div className="divPesquisa">
                    <input className="pesquisa" type="search" placeholder="Digite o nome da planta" onKeyUp={(e) => salvaResultado(e.target.value)} />
                    <button className="botaoPlanta" id="botaoCadastra">Cadastrar um novo item</button>
                </div>
                <BlocoPlantas Lista={lista} ApagaPlanta={apagaItens} ></BlocoPlantas>
            </main>
    )
}