import { Link } from "react-router-dom"

function BannerGlobal(props){

    const temTitulo = props.titulo && props.titulo !== ''
    return(
        <header className="relative w-full">
            <img className="w-full" src="/images/banner-global.png" alt="Varias crianças em volta de uma bola" />
            {temTitulo && (
                <Link to={props.voltar}>
                    <img className="w-8 invert absolute top-3 left-3" src="/icons/back-icon.svg" alt="Icone Voltar" />
                </Link>
            )}
            <h1 className="text-2xl text-white font-bold absolute top-1/2 left-1/2 -translate-1/2 w-full text-center">{props.titulo}</h1>
        </header>
    )
}

export default BannerGlobal