import viaggi from "../../data/viaggi";
import CardViaggio from "../component/CardViaggio";


function Homepage() {

    const now = new Date();
    const filteredViaggi = [];

    for (let i = 0; i < viaggi.length; i++) {
        const viaggio = viaggi[i];
        const inizio = new Date(viaggio.dataInizio);
        const fine = new Date(viaggio.dataFine);

        if (now >= inizio && now <= fine) {
            filteredViaggi.push(viaggio);
        }
    }



    return (
        <>
            <div className="container mt-5">
                <div className="text-center">
                    <h1 className="mb-4">Benvenuto su Boroad!</h1>
                    <p className="lead">
                        Tramite questa applicazione potrai gestire e monitorare i viaggi in corso, passati, e visuallizzare informazioni previo la sicurezza degli utenti!
                    </p>
                    <hr className="my-4" />
                    <h2 className="mt-5">Viaggi in corso</h2>
                    <div className="container d-flex">
                        {filteredViaggi.map((ele) => (

                            <div className="col-md-4 mb-4 m-4" key={ele.id}>
                                <CardViaggio viaggio={ele} />
                            </div>

                        ))}

                    </div>

                </div>
            </div>
        </>
    );
}

export default Homepage;