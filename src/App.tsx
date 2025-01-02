import './App.css'
import { useSelector } from 'react-redux';
import { decrement, increment } from './redux/features/counter/counterSlice';
import { rootState } from './redux/store';
import { useAppDispatch } from './redux/hook';

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
            <h1>Learning Redux</h1>
            <div className="card">
                <h2>count is {count}</h2>

                <button onClick={() => handelIncrement(5)}>Increment 5</button>
                <button onClick={() => handelIncrement(1)}>Increment</button>

                <button onClick={() => handelDecrement(1)}>Decrement</button>
                <button onClick={() => handelDecrement(5)}>Decrement 5</button>
            </div>
        </>
    )
};

export default App;
