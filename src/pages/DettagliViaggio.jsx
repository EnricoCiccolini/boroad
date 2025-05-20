import { useParams } from "react-router-dom"
import utenti from "../../data/utenti"
import CardUtente from "../component/CardUtente"
import { useState } from "react";

export default function DettagliViaggio() {
    const { slug } = useParams();
    const [research, setResearch] = useState('');
    const [users, setUsers] = useState(utenti);

    const filteredName = users.filter(element =>
        element.cognome.toLowerCase().includes(research.toLowerCase()) ||
        element.nome.toLowerCase().includes(research.toLowerCase()) ||
        element.codiceFiscale.toLowerCase().includes(research.toLowerCase())
    );

    const filteredSlug = filteredName.filter(element => !element.slugViaggio.includes(slug));

    const arraysenzadoppi = filteredSlug.filter((oggetto, index) =>
        filteredSlug.findIndex(altroOggetto => altroOggetto.id === oggetto.id) === index
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

    const handleRemoveUser = (ele) => {
        if (ele.slugViaggio.includes(slug)) {
            const updatedUser = {
                ...ele,
                slugViaggio: ele.slugViaggio.filter(viaggio => viaggio !== slug)
            };

            setUsers(prevUsers =>
                prevUsers.map(user =>
                    user.id === ele.id ? updatedUser : user
                )
            );
        }
    };

    return <div>
        <div className="container">
            {
                filteredUtenti.length > 0 ? (
                    <div className="row ">
                        <div className="col-12">
                            <h2 className="mb-4 text-center mt-3">Partecipanti al viaggio <span className=" badge rounded-pill btn-custom "> {filteredUtenti.length}</span> </h2>
                            {filteredUtenti.map((ele) => (
                                <div key={ele.id} className="row mb-3 pb-3">
                                    <div className="col-12">
                                        <CardUtente utente={ele} handleRemoveUser={handleRemoveUser} handleAddUser={handleAddUser} slug={slug} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : <h2 className="text-center">Nessun viaggiatore per questo viaggio</h2>
            }
        </div>

        <div className="container-fluid text-center mb-3 mt-5">
            <h3>Aggiungi partecipanti</h3>
        </div>

        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-4">
                    <div className="input-group mt-2 mb-5">
                        <span className="input-group-text">Cerca</span>
                        <input className="form-control" aria-label="With textarea"
                            type='text'
                            value={research}
                            onChange={(e) => setResearch(e.target.value)}
                        />
                    </div>
                </div>
            </div>
        </div>

        <div className="container-fluid mt-3 mb-5">
            {arraysenzadoppi.map((ele) => (
                <div key={ele.id} className="row mb-3 pb-3">
                    <div className="col-12">
                        <CardUtente utente={ele} handleRemoveUser={handleRemoveUser} handleAddUser={handleAddUser} slug={slug} />
                    </div>
                </div>
            ))}
        </div>
    </div>
}