import { useParams } from "react-router-dom"
import utenti from "../../data/utenti"
import CardUtente from "../component/CardUtente"

function DettagliViaggio() {
    const { slug } = useParams()
    const filteredUtenti = utenti.filter(res => res.slugViaggio === slug)

    return (
        <>

            <div>
                {
                    filteredUtenti.length > 0 ? filteredUtenti.map((ele) => (
                        <CardUtente utente={ele} key={ele.id} />
                    )) : <h2>Nessun viaggiatore per questo viaggio</h2>
                }
            </div>
        </>
    )
}

export default DettagliViaggio