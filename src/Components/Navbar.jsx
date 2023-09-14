import { Link } from 'react-router-dom'

function Navbar(){
    return(
        <>
        <div>
            <Link to="/">Dentistas</Link>
            <Link to="/contact">Contacto</Link>
            <Link to="/favs">Favoritos</Link>
            <button> Dark/light Mode</button>
        </div>
        </>
    )
}

export default Navbar