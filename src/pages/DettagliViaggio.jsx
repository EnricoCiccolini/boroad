import { useParams } from "react-router-dom"
import utenti from "../../data/utenti"
import CardUtente from "../component/CardUtente"
import { useState } from "react";

export default function DettagliViaggio() {
    const { slug } = useParams();
    const [research, setResearch] = useState('');
    const [users, setUsers] = useState(utenti);

    const filteredName = [
        ...users.filter(element =>
            element.cognome.toLowerCase().includes(research.toLowerCase())
        ),
        ...users.filter(element =>
            element.nome.toLowerCase().includes(research.toLowerCase())
        ),
        ...users.filter(element =>
            element.codiceFiscale.toLowerCase().includes(research.toLowerCase())
        ),
    ];

    const arraysenzadoppi = filteredName.filter((oggetto, index) =>
        filteredName.findIndex(altroOggetto => altroOggetto.id === oggetto.id) === index
    );

    const filteredUtenti = users.filter(res => res.slugViaggio.includes(slug));

    const handleAddUser = (ele) => {

        if (!ele.slugViaggio.includes(slug)) {

            const updatedUser = {
                ...ele,
                slugViaggio: [...ele.slugViaggio, slug]
            };


            setUsers(prevUsers =>
                prevUsers.map(user =>
                    user.id === ele.id ? updatedUser : user
                )
            );
        }
    };

    return <div>

        <div>
            {
                filteredUtenti.length > 0 ? filteredUtenti.map((ele) => (
                    <CardUtente utente={ele} key={ele.id} />
                )) : <h2>Nessun viaggiatore per questo viaggio</h2>
            }
        </div>
        <div className="text-center mb-3 mt-3">campo per aggiungere partecipanti</div>
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
                <div key={id} >
                    <CardUtente utente={ele} />
                    <button className="btn btn-custom ms-3 mt-1" onClick={() => handleAddUser(ele)}>
                        aggiungi
                    </button>
                </div>
            ))}
        </div>
    </div>
}