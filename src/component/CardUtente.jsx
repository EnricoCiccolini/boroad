export default function CardUtente({ utente }) {

    const { id, nome, cognome, telefono } = utente;

    return <div>
        <div className="card mb-3" key={id}>
            <div className="card-body">
                <h5 className="card-title">{nome}</h5>
                <h5 className="card-title">{cognome}</h5>
                <p className="card-text">
                    {telefono}
                </p>
            </div>
        </div>
    </div>
};

