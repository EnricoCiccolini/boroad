import { useParams } from "react-router-dom"
import utenti from "../../data/utenti"
import CardUtente from "../component/CardUtente"
import { useState } from "react";

export default function DettagliViaggio() {

    const { slug } = useParams();

    const [research, setResearch] = useState('');
    const [addUser, setAddUser] = useState([]);

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

    const filteredUtenti = utenti.filter(res => res.slugViaggio.includes(slug));

    const handleAddUser = (ele) => {
        setAddUser([...addUser, ele])

    };

    return <div>

        <div className="text-center mb-3 mt-3">campo per aggiungere partecipanti</div>
        <div>
            {
                filteredUtenti.length > 0 ? filteredUtenti.map((ele) => (
                    <CardUtente utente={ele} key={ele.id} />
                )) : <h2>Nessun viaggiatore per questo viaggio</h2>
            }
        </div>

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
                <>
                    <CardUtente utente={ele} key={id} />
                    <button onClick={() => handleAddUser(ele)} >aggiungi</button>
                </>
            ))};
        </div>

    </div>
};

