import { NavLink } from "react-router-dom";

export default function Header() {

    return <header className="bg-secondary">
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Logo</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <NavLink className="nav-link fw-bold fw-header" to="/">Home</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink className="nav-link fw-bold fw-header" to="/viaggi">Lista Viaggi</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink className="nav-link fw-bold fw-header" to="/utenti">Lista Utenti</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>

};

