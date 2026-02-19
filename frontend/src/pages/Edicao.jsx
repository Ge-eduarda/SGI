import BannerGlobal from "../Componentes/BannerGlobal/BannerGlobal"
import NavBar from "../Componentes/NavBar/NavBar"
import CardInfo from '../Componentes/CardInfo/CardInfo'
import TextTop from "../Componentes/TextTop/TextTop"

function Edicao(){
    return(
        <>
        <BannerGlobal titulo="Interclasse 2026" voltar="/Home"/>
        <TextTop texto="Editar detalhes do interclasse"/>
        <main className="w-[80%] m-auto mt-5 pb-20">
            <CardInfo titulo="Modalidades" icon="/icons/trophy-icon.svg" alt="Icone Troféu"/>
            <CardInfo titulo="Arrecadação" icon="/icons/cesta-icon.svg" alt="Icone Arrecadação"/>
            <CardInfo titulo="Regulamento" icon="/icons/book-icon.svg" alt="Icone Regulamento"/>
            <CardInfo titulo="Turmas" icon="/icons/group-icon.svg" alt="Icone Turmas"/>
            <CardInfo titulo="Agenda" icon="/icons/calendario-icon.svg" alt="Icone Agenda"/>
        </main>
        <NavBar/>
        </>

    )
}

export default Edicao