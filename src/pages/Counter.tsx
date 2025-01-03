import { Button } from "@/components/ui/button";
import { decrement, increment } from "@/redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { rootState } from "@/redux/store";
// import { useSelector } from 'react-redux';

const Counter = () => {
    const dispatch = useAppDispatch();
    const count = useAppSelector((state: rootState) => state.counter.count);

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

export default Counter;