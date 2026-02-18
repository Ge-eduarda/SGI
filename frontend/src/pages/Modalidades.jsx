import BannerGlobal from "../components/BannerGlobal/BannerGlobal"
import NavBar from "../components/NavBar/NavBar"
import ButtonCard from '../components/ButtonCard/ButtonCard'

function Modalidades(){
    return(
        <>
            <BannerGlobal titulo="Modalidades"/>
            <ButtonCard icon="/icons/basquete-icon.svg" texto="Basquete" seta="true" invert="false"/>
            <ButtonCard icon="/icons/trophy-icon.svg" texto="Corrida" seta="true" invert="true"/>
            <ButtonCard icon="/icons/bola-icon.svg" texto="Futsal" seta="true" invert="false"/>
            <NavBar />
        </>
    )
}

export default Modalidades