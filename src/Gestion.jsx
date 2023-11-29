import { useState, useEffect } from "react";
import Formulario from "./Formulario";
import ListaPociones from "./ListaPociones";

const Gestion = () => {
    //estado para almacenar las pociones
    const [pociones, setPociones] = useState([]);
    
   //carga inicial de pociones desde localStorage
   useEffect(() => {
    const pocionesGuardadas = JSON.parse(localStorage.getItem('pociones'));
    if (pocionesGuardadas) {
        setPociones(pocionesGuardadas)
    }
}, []);   
    
    
    //almacena las pociones en el localStrorage, incluso cuado cambia el estado de la pocion
    useEffect(() => {
        localStorage.setItem('pociones', JSON.stringify(pociones))
    }, [pociones])
  
    //agrega pocion
    const agregarPocion = (nombre) => {
        const nuevaPocion = {
            id: Date.now(),
            nombre,
            comprar: false,//original en true
        };
        setPociones([...pociones, nuevaPocion])
    };
    //cambia estado de poción COMPRAR<=>SIN STOCK
    const cambiarEstado = (id) => {
        const nuevasPociones = pociones.map((pocion) =>
            pocion.id === id ? { ...pocion, comprar: !pocion.comprar } : pocion
        )
        setPociones(nuevasPociones);
    }

    
    //elimina la poción de la lista
    const eliminarPocion = (id) => {
        const nuevasPociones = pociones.filter((pocion) => pocion.id !== id);
        setPociones(nuevasPociones)
    };
    return (
        <div>
            <h1>Gestión de pociones</h1>
            <Formulario
                agregarPocion={agregarPocion} />
            <ListaPociones
                pociones={pociones}
                cambiarEstado={cambiarEstado}
                eliminarPocion={eliminarPocion} />
        </div>
    )
}
export default Gestion;