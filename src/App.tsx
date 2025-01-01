import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './redux/features/counter/counterSlice';

function App() {
    const dispatch = useDispatch();
    const  count  = useSelector((state : number) => state.count);
    console.log('count', count);

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
