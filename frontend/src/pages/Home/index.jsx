import { Link } from "react-router-dom";
import "./index.css";


function Home() {
    return (
        <div className="home">
            <h1>Bem-vindo ao Sistema de Gerenciamento</h1>
            <Link to="/create/cliente">
                <button className="home-button">Começar agora</button>
            </Link>
        </div>
    );
}

export default Home;