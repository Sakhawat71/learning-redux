import './App.css'
import { useSelector } from 'react-redux';
import { decrement, increment } from './redux/features/counter/counterSlice';
import { rootState } from './redux/store';
import { useAppDispatch } from './redux/hook';
import { Button } from './components/ui/button';
import Navbar from './components/layout/Navbar';

function App() {
    const dispatch = useAppDispatch();
    const count = useSelector((state: rootState) => state.count);

    // increment
    const handelIncrement = (payLoad: number) => {
        dispatch(increment(payLoad));
    };

    // decrement
    const handelDecrement = (payLoad: number) => {
        dispatch(decrement(payLoad));
    };

    return (
        <>
        <Navbar />
            <h1>Learning Redux</h1>
            <div className="card">
                <h2>count is {count}</h2>

                <Button onClick={() => handelIncrement(5)}>Increment 5</Button>
                <Button onClick={() => handelIncrement(1)}>Increment</Button>

                <Button onClick={() => handelDecrement(1)}>Decrement</Button>
                <Button onClick={() => handelDecrement(5)}>Decrement 5</Button>
            </div>
        </>
    )
};

export default App;
