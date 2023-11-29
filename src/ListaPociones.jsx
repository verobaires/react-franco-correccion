import Pocion from "./Pocion";
import PropTypes from "prop-types";
const ListaPociones = ({ pociones, cambiarEstado, eliminarPocion }) => {
    return (
        <div>
            <h2>Lista de pociones</h2>
            {pociones.map((pocion) => (
                <Pocion
                    key={pocion.id}
                    pocion={pocion} 
                    cambiarEstado={cambiarEstado}
                    eliminarPocion={eliminarPocion} />
            ))}
        </div>
    );
};
export default ListaPociones;

ListaPociones.propTypes = {
    pociones : PropTypes.string,
    cambiarEstado : PropTypes.string,
    eliminarPocion : PropTypes.string,
}