import { Link } from "react-router-dom"
import Button from "../Button/Button"
import Input from "../Input/Input"

function Formulario(){
    return(
        <form className="w-full text-center">
            <Input tipo="email" placeholder="email"/>
            <Input tipo="password" placeholder="senha"/>
            <p className="my-5">Esqueci minha senha</p>
            <Link to={"/Home"}>
                <button className="rounded-md bg-red-500 text-white w-[80%] py-2 font-bold">Entrar</button>
            </Link>
        </form>
    )
}

export default Formulario