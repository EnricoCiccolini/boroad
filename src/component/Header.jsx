import { NavLink } from "react-router-dom";


export default function Header() {

    return <header className="bg-secondary">
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link fw-bold fw-header" to="/">Logo</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link fw-bold fw-header" to="/viaggi">Lista Viaggi</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link fw-bold fw-header" to="/utenti">Lista Utenti</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>

};

