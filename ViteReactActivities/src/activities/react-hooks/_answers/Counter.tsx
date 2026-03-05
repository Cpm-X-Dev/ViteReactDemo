import { useState } from "react";

export const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h3>Counter</h3>
            <p>
                Count: <span>{count}</span>
            </p>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
};
