import ContainerPlantas from "../ContainerPlantas/index.jsx"
import { useState, useEffect} from "react"
// oi
export default function BlocoPlantas(props) {
    console.log(props.Lista)
    const BlocoLista = props.Lista
  

    return(
    <div id="bloco-plantas">
        {
        BlocoLista.map( (e) => 
            <ContainerPlantas key = {e.id} chave = {e.id} foto = {e.imagem}  tipo = {e.Tipo} pote = {e.Pote} unidade = {e.Unidade} preco = {e.Preço} ApagaPlanta = {props.ApagaPlanta} ></ContainerPlantas>
        )
        }
        
    </div>

    )
} 