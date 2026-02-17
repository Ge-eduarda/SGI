function BannerGlobal(props){

    const titulo = props.titulo ? true : false
    return(
        <header className="w-dvw relative">
            <img className="w-100" src="/images/Banner-Global.png" alt="Pessoas em volta de uma bola" />
            <h1 className={`${titulo ? 'block' : 'hidden'} text-white absolute top-1/2 left-1/2 -translate-1/2 z-10 text-xl font-bold`}>{props.titulo}</h1>
        </header>
    )
}

export default BannerGlobal