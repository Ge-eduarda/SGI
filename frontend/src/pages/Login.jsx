import { useEffect } from "react"
import BannerLogin from "../Componentes/BannerLogin/BannerLogin"
import Formulario from "../Componentes/Formulario/Formulario"

function Login(){
    useEffect(()=>{
        document.title = "SGM - Login"
    },[])
    return(
        <>
            <BannerLogin />
            <Formulario />
            <picture className="w-full">
                <img className="m-auto mt-5" src="/images/sesi-logo.png" alt="Logo-Sesi" />
            </picture>
        </>
    )
}

export default Login