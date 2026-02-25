function Button(props){
    return(
        <button  className="bg-red-500 text-white flex gap-2 px-5 py-2 font-bold rounded-md w-max">{props.children}</button>
    )
}

export default Button