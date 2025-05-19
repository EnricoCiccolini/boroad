import CardViaggio from "../component/CardViaggio";
import { useState } from "react";

export default function Viaggi({ viaggio, setViaggio }) {
    const [allert, setAllert] = useState(false);
    const [message, setmessage] = useState('');
    const [success, setsuccess] = useState(false);
    const [timeoutId, setTimeoutId] = useState(null);

    const [nuovoViaggio, setNuovoViaggio] = useState({
        destinazione: "",
        dataInizio: "",
        dataFine: "",
        image: ""
    });

    const handleChange = (e) => {
        setNuovoViaggio({
            ...nuovoViaggio,
            [e.target.name]: e.target.value,
        });
    };

    const aggiungiViaggio = () => {
        let n = 0;

        if (timeoutId) {
            clearTimeout(timeoutId);
            setTimeoutId(null);
        };

        setAllert(false);
        setsuccess(false);

        let messageerror = `si sono verificati i seguenti problemi   `;
        if (nuovoViaggio.destinazione === "") {
            n++;
            messageerror += `
                , devi inserire una destinazione
            `;
        };

        if (nuovoViaggio.dataInizio === "") {
            n++;
            messageerror += `
                ,  devi inserire una data di inizio viaggio
                `;
        };

        if (nuovoViaggio.dataFine === "") {
            n++;
            messageerror += `
                ,   devi inserire una data di fine viaggio
            `;
        };

        if (nuovoViaggio.dataFine < nuovoViaggio.dataInizio) {
            n++;
            messageerror += `
                ,   non puoi inserire una data di fine prima di quella iniziale 
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

        if (nuovoViaggio.image === "") {
            nuovoViaggio.image = "https://images.lonelyplanetitalia.it/static/places/ferrara-4672.jpg?q=80&p=slider&s=533190079787b6b18e48cd885fc11018"
        };

        const nuovoId = viaggio.length + 1;
        const slug = `${nuovoViaggio.destinazione.toLowerCase().replace(/\s+/g, "-")}`;
        const viaggioAggiunto = {
            id: nuovoId,
            slug,
            ...nuovoViaggio
        };

        setsuccess(true);
        setViaggio([...viaggio, viaggioAggiunto]);
        setNuovoViaggio({ destinazione: "", dataInizio: "", dataFine: "", image: "" });

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


    const numViaggi = viaggio.length;

    return <div>

        <h1 className="text-center mt-3 mb-3">Lista viaggi  <span className="badge text-bg-secondary"> {numViaggi}</span></h1>
        <div className="container min-height  position-relative">
            {allert ? <div className="message-pop alert alert-danger text-center" role="alert">
                {message} <button type="button" className="btn-close position-absolute top-0 start-100 translate-middle" aria-label="Close" onClick={close}></button>
            </div> : ''}
            {success ? <div className="message-pop alert alert-success text-center" role="alert">
                Viaggio caricato con successo <button type="button" className="btn-close position-absolute top-0 start-100 translate-middle" aria-label="Close" onClick={close}></button>
            </div> : ''}
        </div>
        <div className=" container mt-5 mb-5">
            <h2 className="mb-4 mt-4 text-center">Aggiungi un nuovo viaggio</h2>
            <div className="row mb-4 align-items-end">
                <div className="col-md-3">
                    <label htmlFor="destinazione">
                        <h5>destinazione:</h5>
                    </label>
                    <input
                        id="destinazione"
                        type="text"
                        name="destinazione"
                        className="p-2 rounded"
                        placeholder="Destinazione"
                        value={nuovoViaggio.destinazione}
                        onChange={handleChange}
                        required />
                </div>
                <div className="col-md-2">
                    <label htmlFor="data-inizio">
                        <h5>data inizio:</h5>
                    </label>
                    <input
                        id="data-inizio"
                        type="date"
                        name="dataInizio"
                        className="p-2 rounded"
                        value={nuovoViaggio.dataInizio}
                        onChange={handleChange}
                        required />
                </div>
                <div className="col-md-2">
                    <label htmlFor="data-fine">
                        <h5>data fine:</h5>
                    </label>
                    <input
                        id="data-fine"
                        type="date"
                        name="dataFine"
                        className="p-2 rounded"
                        placeholder="Data Fine"
                        value={nuovoViaggio.dataFine}
                        onChange={handleChange}
                        required />
                </div>

                <div className="col-md-3">
                    <label htmlFor="immagine">
                        <h5>immagine destinazione:</h5>
                    </label>
                    <input
                        id="immagine"
                        type="text"
                        name="image"
                        className="p-2 rounded"
                        placeholder="URL immagine"
                        value={nuovoViaggio.image}
                        onChange={handleChange}
                        required />
                </div>
                <div className="col-md-2 d-grid">
                    <button type="button" className="btn btn-custom" onClick={aggiungiViaggio}>Aggiungi viaggio</button>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="row">
                {viaggio.map((ele) => (
                    <div className="col-md-4 mb-4" key={ele.id}>
                        <CardViaggio viaggio={ele} />
                    </div>
                ))}
            </div>
        </div>

    </div>
};
