import { Outlet } from 'react-router-dom';
import Header from '../component/Header';


export default function DefaultLayout() {

    return <div>
        <Header />
        <main>
            < Outlet />
        </main>
    </div>

};

// import { Outlet } from "react-router-dom";
// import Header from "../components/Header";

// export default function DefaultLayout() {

//     return <>
//         <Header />
//         <main className="bg-dark">
//             <Outlet />
//         </main>
//     </>
// };