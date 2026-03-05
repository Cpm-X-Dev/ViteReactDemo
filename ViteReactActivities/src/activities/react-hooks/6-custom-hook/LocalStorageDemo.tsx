/**
 * Activity 6b: Custom Hook — LocalStorageDemo
 *
 * Goal: Use the useLocalStorage custom hook in a component.
 *
 * Instructions:
 * 1. Import the useLocalStorage hook from "./useLocalStorage"
 * 2. Use it to persist a `name` string under the key "demo-name"
 * 3. Wire up the input to read from and write to the hook's state
 * 4. The value should survive page refreshes (stored in localStorage)
 */

// TODO: Import useLocalStorage from "./useLocalStorage"

export const LocalStorageDemo = () => {
    // TODO: Use the custom hook:
    // const [name, setName] = useLocalStorage("demo-name", "");

    return (
        <div>
            <h3>LocalStorage Demo</h3>
            <p>Type your name — it persists across page refreshes.</p>
            <input
                type="text"
                value={"" /* TODO: Use `name` from the custom hook */}
                onChange={(e) => {
                    // TODO: Call setName with e.target.value
                    console.log(e.target.value);
                }}
            />
            <p>Stored value: {/* TODO: Display `name` */}</p>
        </div>
    );
};
