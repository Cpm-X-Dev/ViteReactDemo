/**
 * Activity 1: useState — Counter
 *
 * Goal: Build a counter that increments, decrements, and resets.
 *
 * Instructions:
 * 1. Import useState from React
 * 2. Create a state variable `count` initialized to 0
 * 3. Wire up the three buttons to:
 *    - Increment: add 1 to count
 *    - Decrement: subtract 1 from count
 *    - Reset: set count back to 0
 * 4. Display the current count in the <span>
 */

// TODO: Import useState from "react"

export const Counter = () => {
    // TODO: Create a state variable `count` with initial value 0
    // const [count, setCount] = useState(...)

    return (
        <div>
            <h3>Counter</h3>
            <p>
                Count: <span>{/* TODO: Display count here */}</span>
            </p>
            <button onClick={() => {/* TODO: Increment count */}}>+</button>
            <button onClick={() => {/* TODO: Decrement count */}}>-</button>
            <button onClick={() => {/* TODO: Reset count to 0 */}}>Reset</button>
        </div>
    );
};
