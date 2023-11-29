
import PropTypes from "prop-types";

const Pocion = ({ pocion, cambiarEstado, eliminarPocion }) => {
    const { id, nombre, comprar } = pocion;
    const cambiar = () => {
        cambiarEstado(id);
    };
    const eliminar = () => {
        eliminarPocion(id);
    }
    return (
        <div>
            <span>{id}{nombre}{comprar}</span>
            <button onClick={cambiar}>{comprar ? 'COMPRAR' : 'SIN STOCK'}</button>
            <button onClick={eliminar}>ELIMINAR POCIÓN</button>
        </div>
    );
};
export default Pocion;

Pocion.propTypes = {
    pocion : PropTypes.string,
    cambiarEstado : PropTypes.string,
    eliminarPocion : PropTypes.string,
}