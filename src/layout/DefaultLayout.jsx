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
