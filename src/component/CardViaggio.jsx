import { Link } from "react-router-dom";

export default function CardViaggio({ viaggio }) {
    const { destinazione, dataInizio, dataFine, slug, image } = viaggio;

    const now = new Date();
    const inizio = new Date(dataInizio);
    const fine = new Date(dataFine);

    let statoViaggio = "";

    if (now < inizio) {
        const diffOre = (inizio - now) / (1000 * 60 * 60);
        if (diffOre > 1) {
            statoViaggio = "🟣 In programma";
        }
    } else if (now >= inizio && now <= fine) {
        statoViaggio = "🟢 In corso";
    } else {
        statoViaggio = "🔴 Viaggio concluso";
    };

    return (
        <div className="card h-100">
            <img src={image} className="img-card card-img-top" alt={destinazione} />
            <div className="card-body bg-secondary-subtle">
                <h3 className="card-title text-center mt-2 mb-2 fw-bold">{destinazione}</h3>
                <p className="card-text">Data inizio: {dataInizio}</p>
                <p className="card-text">Data fine: {dataFine}</p>
                <p className="card-text fw-bold">Stato: {statoViaggio}</p>
                <Link to={`/viaggi/${slug}`}><strong>Dettagli del viaggio</strong></Link>
            </div>
        </div>
    )
}
