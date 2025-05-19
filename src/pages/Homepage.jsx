
import CardViaggio from "../component/CardViaggio";
// import profileImg from '../assets/image-profile.png';


export default function Homepage({ viaggio }) {

    const now = new Date();
    const filteredViaggi = [];

    for (let i = 0; i < viaggio.length; i++) {
        const singleviaggio = viaggio[i];
        const inizio = new Date(singleviaggio.dataInizio);
        const fine = new Date(singleviaggio.dataFine);

        if (now >= inizio && now <= fine) {
            filteredViaggi.push(singleviaggio);
        };
    };

    let numViaggi = filteredViaggi.length

    return <div>

        <div className="container mt-5">
            <div className="text-center">
                <h1 className="mb-4 roboto-uniquifier">Benvenuto su Boroad!</h1>
                <p className="lead">
                    Tramite questa applicazione potrai gestire e monitorare i viaggi in corso, passati, e visuallizzare informazioni previo la sicurezza degli utenti!
                </p>
                <hr className="my-4" />

                <div id="carouselExample" className="carousel slide">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="tripjpg.jpg" className="d-block img-carousel mx-auto" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="asphalt-road-mountain-valley-book-crimea-pages-open-magical-travel-education-concept-183135644.png" className="d-block img-carousel mx-auto" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="th.jpeg" className="d-block img-carousel mx-auto" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span className="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

                <h2 className="mt-5 roboto-uniquifier">Viaggi in corso <span className=" badge rounded-pill btn-custom "> {numViaggi}</span></h2>
                <div className="container d-flex">
                    {filteredViaggi.map((ele) => (

                        <div className="col-md-4 mb-4 m-4" key={ele.id}>
                            <CardViaggio viaggio={ele} />
                        </div>

                    ))}

                </div>

            </div>
        </div>

    </div>
};
