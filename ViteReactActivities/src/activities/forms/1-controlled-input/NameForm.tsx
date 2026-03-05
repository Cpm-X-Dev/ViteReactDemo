/**
 * Activity 1: Controlled Input
 *
 * Goal: Create a controlled text input that displays the typed value in real time.
 *
 * Instructions:
 * 1. Import useState from React
 * 2. Create a `name` state initialized to an empty string
 * 3. Bind the input's `value` to the state
 * 4. Update the state on every keystroke via `onChange`
 * 5. Display the current value below the input
 */

// TODO: Import useState from "react"

export const NameForm = () => {
    // TODO: Create state `name` initialized to ""

    return (
        <div>
            <h3>What's Your Name?</h3>
            <input
                type="text"
                placeholder="Type your name..."
                value={"" /* TODO: Bind to `name` state */}
                onChange={(e) => {
                    // TODO: Update `name` state with e.target.value
                    console.log(e.target.value);
                }}
            />
            <p>Hello, {/* TODO: Display `name` here, or "stranger" if empty */}!</p>
        </div>
    );
};
