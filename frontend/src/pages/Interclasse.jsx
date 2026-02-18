import BannerGlobal from "../components/BannerGlobal/BannerGlobal"
import NavBar from "../components/NavBar/NavBar"
import ButtonCard from '../components/ButtonCard/ButtonCard'
import { Link } from "react-router-dom"

function Interclasse(){
    return(
        <>
            <BannerGlobal titulo="Interclasse 2026"/>
            <Link to={"/Modalidades"} >
                <ButtonCard icon="/icons/trophy-icon.svg" texto="Modalidades" seta="true" invert="true"/>
            </Link>
            <ButtonCard icon="/icons/cesta-icon.svg" texto="Arrecadação" seta="true" invert="false"/>
            <ButtonCard icon="/icons/livro-regulamento-icon.svg" texto="Regulamento" seta="true" invert="false"/>
            <ButtonCard icon="/icons/person-icon.svg" texto="Turmas" seta="true" invert="false"/>
            <NavBar />
        </>
    )
}

export default Interclasse