import { Link } from "react-router-dom"

function NavBar(){
    return(
        <nav className="bg-red-500 p-2 fixed bottom-0 w-full">
            <ul className="flex justify-around items-center">
                <li><Link to={"/Home"}><img src="/icons/home-icon.svg" alt="Icone Home" /></Link></li>
                <li><Link to={"/Turmas"}><img className="invert w-10 " src="/icons/group-icon.svg" alt="Icone Turmas" /></Link></li>
                <li><Link to={"/Ranking"}><img src="/icons/trophy-icon.svg" alt="Icone de Ranking" /></Link></li>
                <li><Link to={"/"}><img src="/icons/logout-icon.svg" alt="Icone de Sair" /></Link></li>
            </ul>
        </nav>
    )
}

export default NavBar