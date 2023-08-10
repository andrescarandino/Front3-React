import { useState } from "react"

function Form(){
    const [nombre, setNombre] = useState("");
    const [edad, setEdad] = useState(0);
    const [pokemon, setPokemon] = useState("");

    function handleNombre(e) {
        setNombre(e.target.value);
    }
    function handleEdad(e) {
        setEdad(e.target.value);
    }
    function handlePokemon(e) {
        setPokemon(e.target.value);
    }
    function registro(e){
        e.preventDefault();
        window.alert("Datos Enviados")
    }

    return(
        <div>
            <form onSubmit={registro}>
                <div>
                    <input type="text" placeholder="Ingrese su nombre" onChange={handleNombre} />
                    <input type="text" placeholder="Ingrese su edad" onChange={handleEdad} />
                    <input type="text" placeholder="Ingrese su pokemon favorito" onChange={handlePokemon} />
                    <input type="submit" onClick={registro} value="Registrarse" />
                </div>
            </form>    
        </div>
    )
}
export default Form