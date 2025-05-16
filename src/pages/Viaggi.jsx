import CardViaggio from "../component/CardViaggio";
import viaggi from '../../data/viaggi';
import { useState } from "react";

function Viaggi() {

    const [viaggio, setViaggio] = useState(viaggi);
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
        const nuovoId = viaggio.length + 1;
        const slug = `${nuovoViaggio.destinazione.toLowerCase().replace(/\s+/g, "-")}`

        const viaggioAggiunto = {
            id: nuovoId,
            slug,
            ...nuovoViaggio
        };

        setViaggio([...viaggi, viaggioAggiunto]);
        setNuovoViaggio({ destinazione: "", dataInizio: "", dataFine: "", image: "" })
    };

    return (
        <>
            <h1 className="text-center mt-3 mb-3">Lista viaggi</h1>
            <div className="container">
                <div className="row">
                    {viaggio.map((ele) => (
                        <div className="col-md-4 mb-4" key={ele.id}>
                            <CardViaggio viaggio={ele} />
                        </div>
                    ))}
                </div>
            </div>

            <div className=" container mt-4">
                <h2 className="mb-4 mt-4 text-center">Aggiungi un nuovo viaggio</h2>
                <div className="row mb-4">
                    <div className="col-md-3">
                        <input
                            type="text"
                            name="destinazione"
                            placeholder="Destinazione"
                            value={nuovoViaggio.destinazione}
                            onChange={handleChange} />
                    </div>
                    <div className="col-md-2">
                        <input
                            type="date"
                            name="dataInizio"
                            value={nuovoViaggio.dataInizio}
                            onChange={handleChange} />
                    </div>
                    <div className="col-md-2">
                        <input
                            type="date"
                            name="dataFine"
                            placeholder="Destinazione"
                            value={nuovoViaggio.dataFine}
                            onChange={handleChange} />
                    </div>

                    <div className="col-md-3">
                        <input
                            type="text"
                            name="image"
                            placeholder="URL immagine"
                            value={nuovoViaggio.image}
                            onChange={handleChange} />
                    </div>
                    <div className="col-md-2 d-grid">
                        <button type="button" className="btn btn-primary" onClick={aggiungiViaggio}>Aggiungi viaggio</button>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Viaggi;                     