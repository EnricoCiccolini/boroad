import { useState } from 'react';
import utenti from '../../data/utenti';
import CardUtente from "../component/CardUtente";

export default function User() {

    const [research, setResearch] = useState('')

    const filteredName = [
        ...utenti.filter(element =>
            element.cognome.toLowerCase().includes(research.toLowerCase())
        ),
        ...utenti.filter(element =>
            element.nome.toLowerCase().includes(research.toLowerCase())
        ),
    ];

    const arraysenzadoppi = filteredName.filter((oggetto, index) =>
        filteredName.findIndex(altroOggetto => altroOggetto.id === oggetto.id) === index
    );

    return <div>

        <h1 className="mt-3 mb-3 text-center">Lista utenti <span className="badge text-bg-secondary"> {arraysenzadoppi.length}</span></h1>
        <div className='container w-25'>
            <div className="input-group mt-2 mb-5 d-flex ">
                <span className="input-group-text">Cerca</span>
                <input className="form-control" aria-label="With textarea"
                    type='text'
                    value={research}
                    onChange={(e) => setResearch(e.target.value)}
                />
            </div>
        </div>

        <div className="container mt-3 mb-5">
            {arraysenzadoppi.map((ele, id) => (
                <CardUtente utente={ele} key={id} />
            ))}
        </div>
    </div>
};