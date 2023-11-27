export default function ContainerPlantas(props) {
    return (
        <section className="divPlanta" data-chave={props.chave} >
            <span className="material-icons iconeX icones " onClick={(e) => props.ApagaPlanta(e.target.parentNode)}>
                cancel
            </span>
            <img className='imagemPlanta' src={props.foto} alt="Imagem da planta" />
            <h2 className="tituloPlanta">{props.tipo}</h2>
            <p><strong>Pote:</strong>{props.pote}</p>
            <p><strong>Unidade:</strong> {props.unidade}</p>
            <p><strong>Valor:</strong>{props.preco}</p>
            <span className="material-symbols-outlined icones iconeEdit" onClick={() => {
                props.recebeInformacao(props.foto, props.tipo, props.pote, props.unidade, props.preco, props.chave, "edita")
                
                
            }} >
                edit
            </span>
        </section>
    )
}