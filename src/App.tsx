import './App.css'
import { useSelector } from 'react-redux';
import { decrement, increment } from './redux/features/counter/counterSlice';
import { rootState } from './redux/store';
import { useAppDispatch } from './redux/hook';

function App() {
    const dispatch = useAppDispatch();
    const count = useSelector((state: rootState) => state.count);

    const handelIncrement = () => {
        dispatch(increment());
    };
    const handelDecrement = () => {
        dispatch(decrement());
    };

    return (
        <>
            <h1>Learning Redux</h1>
            <div className="card">
                <h2>count is {count}</h2>

                <button onClick={handelIncrement} >Increment</button>
                <button onClick={handelDecrement}>Decrement</button>
            </div>
        </>
    )
};

export default App;
