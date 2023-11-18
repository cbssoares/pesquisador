import { useState, useEffect} from "react"
import BlocoPlantas from "./components/Blocoplantas/index.jsx"
import { listaDePlantas } from './api/api.js'
import { atualizaLista } from "./api/api.js"


export default function App(props) {

    const[lista, setlista] = useState(props.listaP)
    console.log(props)
    
    const apagaItens = (bloco) => {
        if (window.confirm("Tem certeza que quer apagar este item ?")) {
            console.log(bloco)
            const item = bloco.dataset.chave 
            props.listaP.splice(item, 1)
            console.log(props.listaP)
            const listaNova =  props.listaP.map( (e) => {
               e.id = `${props.listaP.indexOf(e)}`
               return e
            })
            
            atualizaLista(listaNova)
            setlista(listaNova)
        }
    
    }



    function salvaResultado(busca) {
        if (busca == "") {
            setlista(props.listaP)
        } else {
            console.log(busca)
            const listaFiltrada = props.listaP.filter(plantas => plantas.Tipo.toLowerCase().includes(busca.toLowerCase()))
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

export async function getStaticProps(){
    const listaP = await listaDePlantas()

     return {
        props:{
         listaP
    }
}

}