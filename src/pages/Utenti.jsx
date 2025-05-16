import utenti from '../../data/utenti';
import CardUtente from "../component/CardUtente";

function User() {

    return (
        <>


            <h1 className="mt-3 mb-3 text-center">Lista utenti</h1>
            <div className='container w-25'>
                <div className="input-group mt-2 mb-5 d-flex ">
                    <span className="input-group-text">Cerca</span>
                    <input className="form-control" aria-label="With textarea" />
                </div>
            </div>

            <div className="container">
                {utenti.map((ele, id) => (
                    <CardUtente utente={ele} key={id} />
                ))}
            </div>
        </>
    )
}

export default User