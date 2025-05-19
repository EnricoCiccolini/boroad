import { NavLink } from "react-router-dom";



export default function Header() {

    return <header>
        <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-center">

                        <li className="nav-item mx-3">
                            <NavLink className="nav-link fw-header" to="/"><img src="logo.png" alt="img-logo" className="img-logo" /></NavLink>
                        </li>

                        <li className="nav-item mx-3">
                            <NavLink className="nav-link fw-header bebas-neue-regular" to="/">Homepage</NavLink>
                        </li>

                        <li className="nav-item mx-3">
                            <NavLink className="nav-link fw-header bebas-neue-regular" to="/viaggi">Lista Viaggi</NavLink>
                        </li>

                        <li className="nav-item mx-3">
                            <NavLink className="nav-link fw-header bebas-neue-regular" to="/utenti">Lista Utenti</NavLink>
                        </li>

                    </ul>
                </div>

            </div>
        </nav>
    </header>

};

