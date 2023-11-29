import { Link } from 'react-router-dom';

//saque las barra delante de los nombres de archivos en link to
function Nav() {
    return (
        <nav>
        <ul>
            <li><Link to='/'>INICIO - formulario para cargar productos</Link></li>

            <li><Link to=' productos'>PRODUCTOS - lista de productos cargados</Link></li>
            <li><Link to=' carrito'>CARRITO - lista de productos comprados</Link></li>
        </ul>
        </nav>
    )
}
export default Nav