/**
 * Activity 4: useEffect — Timer
 *
 * Goal: Create a timer that counts up every second using useEffect with cleanup.
 *
 * Instructions:
 * 1. Import useState and useEffect from React
 * 2. Create a `seconds` state initialized to 0
 * 3. Use useEffect to set up a setInterval that increments `seconds` every 1000ms
 * 4. Return a cleanup function from useEffect that clears the interval
 * 5. The timer should start automatically when the component mounts
 */

// TODO: Import useState and useEffect from "react"

export const Timer = () => {
    // TODO: Create state `seconds` initialized to 0

    // TODO: Use useEffect to:
    //   1. Create an interval with setInterval that increments seconds every 1000ms
    //   2. Return a cleanup function that calls clearInterval
    //   3. Use an empty dependency array [] so it runs only on mount

    return (
        <div>
            <h3>Timer</h3>
            <p>
                Elapsed: <span>{/* TODO: Display seconds */}</span>s
            </p>
        </div>
    );
};
