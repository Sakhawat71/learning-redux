import { useState } from 'react';
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <h1>Learning Redux</h1>
            <div className="card">
                <h2>count is {count}</h2>
                <button onClick={() => setCount((count) => count + 1)}>Increment</button>
            </div>
        </>
    )
};

export default App;
