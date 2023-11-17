export default function ContainerPlantas(props) {
    return (
        <div className="divPlanta" data-chave={props.chave} >
            <span className="material-icons iconeX icones " onClick={(e) => props.ApagaPlanta(e.target.parentNode)}>
                cancel
            </span>
            <img className='imagemPlanta' src={props.foto} alt="Imagem da planta" />
            <h2 className="tituloPlanta">{props.tipo}</h2>
            <p><strong>Pote:</strong>{props.pote}</p>
            <p><strong>Unidade:</strong> {props.unidade}</p>
            <p><strong>Valor:</strong>{props.preco}</p>
            <span className="material-symbols-outlined icones iconeEdit" >
                edit
            </span>
        </div>
    )
}