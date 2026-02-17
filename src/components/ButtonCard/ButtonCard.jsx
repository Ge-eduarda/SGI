
function ButtonCard(props){

    const temIcone = props.icon && props.icon !== ''
    const statusEdicao = props.status === "Em andamento"
    const temStatus = props.status && props.status !== ''

    return(
        <div className="w-80 mx-auto my-5 shadow-lg rounded-md flex justify-between items-center p-5 ">
            <div className={`${temIcone ? 'block' : 'hidden'}`}>
                <img className="invert" src={props.icon} alt={props.alt} />
            </div>
            <div>
                <h2 className="text-lg font-bold">{props.texto}</h2>
                <p className={`${temStatus ? 'block' : 'hidden'} text-gray-400 text-sm`}>({props.status})</p>
            </div>
            <div className={`${statusEdicao || props.seta ? 'block' : 'hidden'} `}>
                <img src="/icons/seta-icon.svg" alt="Seta" />
            </div>

            
        </div>
    )
}

export default ButtonCard;