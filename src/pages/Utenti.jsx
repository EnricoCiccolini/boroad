import { useState } from 'react';
import CardUtente from "../component/CardUtente";

export default function User({ utenti, setUtenti }) {

    const [allert, setAllert] = useState(false);
    const [message, setmessage] = useState('');
    const [success, setsuccess] = useState(false);
    const [timeoutId, setTimeoutId] = useState(null);

    const defaultUser = {

        "nome": "",
        "cognome": "",
        "email": "",
        "telefono": "",
        "codiceFiscale": "",
        "slugViaggio": []
    }


    const [research, setResearch] = useState('')
    const [addUser, setAddUser] = useState(defaultUser)




    const handleChange = (e) => {
        setAddUser({
            ...addUser,
            [e.target.name]: e.target.value,
        });
    };




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

    const aggiungiUtente = () => {
        let n = 0;

        if (timeoutId) {
            clearTimeout(timeoutId);
            setTimeoutId(null);
        };

        setAllert(false);
        setsuccess(false);

        let messageerror = `si sono verificati i seguenti problemi   `;
        if (addUser.nome === "") {
            n++;
            messageerror += `
                , devi inserire un nome 
            `;
        };
        if (addUser.cognome === "") {
            n++;
            messageerror += `
                , devi inserire un cognome
            `;
        };
        if (addUser.email === "") {
            n++;
            messageerror += `
                , devi inserire un email
            `;
        };
        if (addUser.telefono === "") {
            n++;
            messageerror += `
                , devi inserire un numero telefono
            `;
        };
        const nan = isNaN(addUser.telefono)
        if (nan) {
            n++;
            messageerror += `
                , devi inserire un numero di telefono valido
            `;
        };
        if (addUser.codiceFiscale.length !== 16) {
            n++;
            messageerror += `
                , devi inserire un codice fiscale valido 
            `;
        };


        if (n > 0) {
            setmessage(messageerror);
            setAllert(true);


            const newTimeoutId = setTimeout(() => {
                setAllert(false);
            }, 5000);

            setTimeoutId(newTimeoutId);
            return;
        };


        const lunghezza = utenti.length;

        const nuovoId = utenti[lunghezza - 1].id + 1;

        const utenteaggiunto = {
            id: nuovoId,
            ...addUser
        };

        setsuccess(true);
        setUtenti([...utenti, utenteaggiunto]);
        setAddUser(defaultUser);

        const newTimeoutId = setTimeout(() => {
            setsuccess(false);
        }, 5000);
        setTimeoutId(newTimeoutId);
    };
    const close = () => {
        clearTimeout(timeoutId);
        setTimeoutId(null);
        setAllert(false);
        setsuccess(false);
    };



    return <div>

        <h1 className="mt-3 mb-3 text-center ">Lista utenti  <span className=" badge rounded-pill btn-custom "> {arraysenzadoppi.length}</span></h1>
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

        <div className=" container mt-5 mb-5">
            <h2 className="mb-4 mt-4 text-center">Aggiungi un nuovo utente</h2>
            <div className="container min-height  position-relative">
                {allert ? <div className="message-pop alert alert-danger text-center" role="alert">
                    {message} <button type="button" className="btn-close position-absolute top-0 start-100 translate-middle" aria-label="Close" onClick={close}></button>
                </div> : ''}
                {success ? <div className="message-pop alert alert-success text-center" role="alert">
                    utente caricato con successo <button type="button" className="btn-close position-absolute top-0 start-100 translate-middle" aria-label="Close" onClick={close}></button>
                </div> : ''}
            </div>
            <div className="row mb-4 align-items-end">

                <div className="col-md-2">
                    <label htmlFor="destinazione">
                        <h5>Nome utente:</h5>
                    </label>
                    <input
                        id="nome-utente"
                        type="text"
                        name="nome"
                        value={addUser.nome}
                        onChange={handleChange}
                        className="p-2 rounded"
                        placeholder="Nome"
                        required />
                </div>

                <div className="col-md-2">
                    <label htmlFor="cognome-utente">
                        <h5>Cognome utente:</h5>
                    </label>
                    <input
                        id="cognome-utente"
                        type="text"
                        name="cognome"
                        value={addUser.cognome}
                        onChange={handleChange}
                        className="p-2 rounded"
                        placeholder="Cognome"
                        required />
                </div>

                <div className="col-md-2">
                    <label htmlFor="mail-utente">
                        <h5>e-mail utente:</h5>
                    </label>
                    <input
                        id="email"
                        type="text"
                        name="email"
                        value={addUser.email}
                        onChange={handleChange}
                        className="p-2 rounded"
                        placeholder="email"
                        required />
                </div>

                <div className="col-md-2">
                    <label htmlFor="telefono-utente">
                        <h5>numero di telefono:</h5>
                    </label>
                    <input
                        id="telefono"
                        type="text"
                        name="telefono"
                        value={addUser.telefono}
                        onChange={handleChange}
                        className="p-2 rounded"
                        placeholder="numero di telefono"
                        required />
                </div>

                <div className="col-md-2">
                    <label htmlFor="cf-utente">
                        <h5>Codice fiscale:</h5>
                    </label>
                    <input
                        id="cf-utente"
                        type="text"
                        name="codiceFiscale"
                        value={addUser.codiceFiscale}
                        onChange={handleChange}
                        className="p-2 rounded"
                        placeholder="Codice fiscale"
                        required />
                </div>


                <div className="col-md-2 d-grid">
                    <button type="button" className="btn btn-custom" onClick={aggiungiUtente} >Aggiungi utente</button>
                </div>
            </div>
        </div>


        <div className="container mt-3 mb-5">
            {arraysenzadoppi.map((ele, id) => (
                <CardUtente utente={ele} key={id} />
            ))}
        </div>
    </div>
};