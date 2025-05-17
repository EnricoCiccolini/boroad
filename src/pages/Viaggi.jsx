import CardViaggio from "../component/CardViaggio";

import { useState } from "react";

function Viaggi({ viaggio, setViaggio }) {

    const [allert, setAllert] = useState(false)
    const [message, setmessage] = useState('')
    const [success, setsuccess] = useState(false)

    const [nuovoViaggio, setNuovoViaggio] = useState({
        destinazione: "",
        dataInizio: "",
        dataFine: "",
        image: ""
    });
    console.log(nuovoViaggio)

    const handleChange = (e) => {
        setNuovoViaggio({
            ...nuovoViaggio,
            [e.target.name]: e.target.value,
        });
    };


    const aggiungiViaggio = () => {
        let n = 0
        let time
        clearTimeout(time)
        setAllert(false)

        setsuccess(false)

        let messageerror = `si sono verificati i seguenti problemi   `
        if (nuovoViaggio.destinazione === "") {
            console.log('sono qui')
            n++
            messageerror += `
                , devi inserire una destinazione

            `
        }
        if (nuovoViaggio.dataInizio === "") {
            n++
            messageerror += `
                ,  devi inserire una data di inizio viaggio

                `
        }
        if (nuovoViaggio.dataFine === "") {
            n++
            messageerror += `
                ,   devi inserire una data di fine viaggio

            `
        }

        if (n > 0) {
            setmessage(messageerror)
            setAllert(true)

            time = setTimeout(function () {

                setAllert(false)
            }, 5000);

            return
        }



        const nuovoId = viaggio.length + 1;
        const slug = `${nuovoViaggio.destinazione.toLowerCase().replace(/\s+/g, "-")}`
        const viaggioAggiunto = {
            id: nuovoId,
            slug,
            ...nuovoViaggio
        };


        setsuccess(true)
        setViaggio([...viaggio, viaggioAggiunto]);
        setNuovoViaggio({ destinazione: "", dataInizio: "", dataFine: "", image: "" })


        time = setTimeout(function () {
            setsuccess(false)
            setAllert(false)
        }, 5000);

    };


    return (
        <>
            <h1 className="text-center mt-3 mb-3">Lista viaggi</h1>
            {allert ? <div className="alert alert-danger" role="alert">
                {message}
            </div> : ''}
            {success ? <div className="alert alert-success" role="alert">
                Viaggio caricato con successo
            </div> : ''}
            <div className=" container mt-5 mb-5">
                <h2 className="mb-4 mt-4 text-center">Aggiungi un nuovo viaggio</h2>
                <div className="row mb-4">
                    <div className="col-md-3">
                        <input
                            type="text"
                            name="destinazione"
                            className="p-2 rounded"
                            placeholder="Destinazione"
                            value={nuovoViaggio.destinazione}
                            onChange={handleChange}
                            required />
                    </div>
                    <div className="col-md-2">
                        <input
                            type="date"
                            name="dataInizio"
                            className="p-2 rounded"
                            value={nuovoViaggio.dataInizio}
                            onChange={handleChange}
                            required />
                    </div>
                    <div className="col-md-2">
                        <input
                            type="date"
                            name="dataFine"
                            className="p-2 rounded"
                            placeholder="Data Fine"
                            value={nuovoViaggio.dataFine}
                            onChange={handleChange}
                            required />
                    </div>

                    <div className="col-md-3">
                        <input
                            type="text"
                            name="image"
                            className="p-2 rounded"
                            placeholder="URL immagine"
                            value={nuovoViaggio.image}
                            onChange={handleChange}
                            required />
                    </div>
                    <div className="col-md-2 d-grid">
                        <button type="button" className="btn btn-primary" onClick={aggiungiViaggio}>Aggiungi viaggio</button>
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
        </>
    )
};

export default Viaggi;