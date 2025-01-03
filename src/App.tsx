import { Outlet } from 'react-router-dom';
import './App.css'
import Navbar from './components/layout/Navbar';

function App() {

    return (
        <>
        <Navbar />
        <h1>Learning Redux</h1>
        <Outlet />
        </>
    )
};

export default App;
