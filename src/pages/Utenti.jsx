import utenti from '../../data/utenti';
import CardUtente from "../component/CardUtente";

function User() {

    return (
        <>
            <h1 className="text-center mt-3 mb-3">Lista utenti</h1>
            <div className="container">
                {utenti.map((ele) => (
                    <CardUtente utente={ele} />
                ))}
            </div>
        </>
    )
}

export default User