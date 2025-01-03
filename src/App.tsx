import { Outlet } from 'react-router-dom';
import './App.css'
import Navbar from './components/layout/Navbar';

function App() {

    return (
        <>
            <Navbar />
            <div className='max-w-7xl mx-auto pt-10'>
                <Outlet />
            </div>
        </>
    )
};

export default App;
