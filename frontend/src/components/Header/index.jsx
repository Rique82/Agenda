import { Link } from 'react-router-dom'
import './style.css'

export default function Header() {
    return (
        <header className="header">
            <h1 className="header-title">Minha API - Avaliação</h1>
            <nav className="header-nav">
                <Link to='/'><button className="nav-button">Início</button></Link>
                <Link to='/clientes'><button className="nav-button">Clientes</button></Link>
                <Link to='/atendimentos'><button className="nav-button">Atendimentos</button></Link>
                <Link to='/login'><button className="nav-button">Login</button></Link>
            </nav>
        </header>
    )
}
