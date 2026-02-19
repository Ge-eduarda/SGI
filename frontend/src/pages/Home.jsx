import { useEffect } from "react"
import BannerGlobal from "../Componentes/BannerGlobal/BannerGlobal"
import NavBar from "../Componentes/NavBar/NavBar"
import CardInfo from "../Componentes/CardInfo/CardInfo"
import { Link } from "react-router-dom"
import Button from "../Componentes/Button/Button"

function Home(){
    useEffect(()=>{
        document.title = "SGM - Home"
    },[])
    return(
        <>
            <BannerGlobal />
            <main className="w-full flex flex-col items-center my-5 pb-20">
                <div className="w-[80%] flex flex-col gap-4 items-start">
                    <Link to={"/NovaEdicao"}>
                        <Button>
                            <img src="/icons/plus-icon.svg" alt="Icone de Mais" /> Criar Nova Edição
                        </Button>
                    </Link>
                    <Link to={"/Edicao"} className="w-full">
                        <CardInfo titulo="Interclasse 2026" status="Em Andamento"/>
                    </Link>
                    <CardInfo titulo="Interclasse 2025" status="Finalizado"/>
                    <CardInfo titulo="Interclasse 2024" status="Finalizado"/>
                </div>
            </main>
            <NavBar />
        </>
    )

}

export default Home