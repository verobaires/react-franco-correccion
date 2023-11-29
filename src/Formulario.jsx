import { useState } from "react";
import PropTypes from "prop-types";

//agregue el trim a nuevaPocion dentro del if
//  onChange={(e) =>  aca el e no tenia su parentesis interno no es obligatorio pero mejor colocarlo
const Formulario = ({agregarPocion}) => {
    const [nuevaPocion, setNuevaPocion] = useState('')
    const handleSubmit = e => {
        e.preventDefault();
        if (nuevaPocion.trim() !== '') {
            agregarPocion(nuevaPocion);
            setNuevaPocion('');
        }
    }
    return (
        <div>
            <h2>Formulario para cargar pociones</h2>
            <form onSubmit={handleSubmit}>
                <input type='text'
                    value={nuevaPocion}
                    onChange={(e) => setNuevaPocion(e.target.value)}
                    placeholder='Escribe la nueva poción' />
                <button type='submit'>AGREGAR POCIÓN</button>
            </form>
        </div>
    );
};
export default Formulario;

Formulario.propTypes={
   agregarPocion : PropTypes.string,
}