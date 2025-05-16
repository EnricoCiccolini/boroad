import CardViaggio from "../component/CardViaggio";
import viaggi from '../../data/viaggi';

function Viaggi() {

    return (
        <>
            <h1 className="text-center mt-3 mb-3">Lista viaggi</h1>
            <div className="d-flex container">
                {viaggi.map((ele) => (
                    <CardViaggio viaggio={ele} />
                ))}
            </div>
        </>
    )
}

export default Viaggi;