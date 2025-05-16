export default function CardViaggio({ viaggio }) {

    const { id, destinazione, dataInizio, dataFine } = viaggio


    return <div>
        <div className="card" key={id}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{destinazione}</h5>
                <p className="card-text">
                    {dataInizio}
                </p>
                <p className="card-text">
                    {dataFine}
                </p>
            </div>
        </div>
    </div>
};
