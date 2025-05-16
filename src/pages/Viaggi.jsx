import CardViaggio from "../component/CardViaggio";
import viaggi from '../../data/viaggi';

function Viaggi() {

    return (
        <>
            <h1 className="text-center mt-3 mb-3">Lista viaggi</h1>
            <div className="container">
                <div className="row">
                    {viaggi.map((ele) => (
                        <div className="col-md-4 mb-4" key={ele.id}>
                            <CardViaggio viaggio={ele} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Viaggi;