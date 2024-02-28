/** permite generar un hipervínculo para poder navegar entre las rutas */
import {Link} from 'react-router-dom';

export const NavBar = () => {
    return (
        <div>
            <Link to='/' >Home</Link>
            <Link to='/create' >Create</Link>
        </div>
    )
}