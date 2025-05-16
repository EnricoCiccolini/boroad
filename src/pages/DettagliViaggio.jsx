import { useParams } from "react-router-dom"
import utenti from "../../data/utenti"
import CardUtente from "../component/CardUtente"

function DettagliViaggio() {
    const { slug } = useParams()
    const filteredUtenti = utenti.filter(res => res.slugViaggio === slug)
    console.log(filteredUtenti)
    return (
        <>

            <div>
                {
                    filteredUtenti ? filteredUtenti.map((ele) => (
                        <CardUtente utente={ele} />
                    )) : <h2>nessun viaggiatore per questo viaggio</h2>
                }
            </div>
        </>
    )
}

export default DettagliViaggio