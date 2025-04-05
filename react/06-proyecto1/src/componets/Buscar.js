import React, { useState } from 'react'

const Buscar = ({listadoState, setListadoState}) => {
    const [busqueda, setBusqueda] = useState("");
    const [noEncontrado, setNoEncontrado] = useState("false");

    const buscarPeli = (e) => {
        //Crear estado y actualizarlo
        setBusqueda(e.target.value);

        //Filtrar para buscar coicidencias
        let pelis_encontradas = listadoState.filter(peli => {
            return peli.titulo.toLowerCase().includes(busqueda.toLocaleLowerCase());
        });
        if(busqueda.length <=  1 || pelis_encontradas <= 0){
            pelis_encontradas = JSON.parse(localStorage.getItem("pelis"));
            setNoEncontrado(true);
        }else(
            setNoEncontrado(false)
        )

        //Actualizar estado del listado principal con lo que he logrado filtrar
        setListadoState(pelis_encontradas);

    } 
    return (
        <div className="search">
            <h3 className="title">Buscar: {busqueda}</h3>
            {(noEncontrado === true && busqueda.length >  1 )&&(
                <span className="no-encontrado">No se ha encontrado ninguna coincidencia</span>
            )}
            <form>
                <input  type="text" 
                        id="search_field" 
                        name = "busqueda"
                        autoComplete='off'
                        onChange={buscarPeli}/>
                <button id="search">Buscar</button>
            </form>
        </div>
    )
}

export default Buscar
