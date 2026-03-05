import { useLocalStorage } from "./useLocalStorage";

export const LocalStorageDemo = () => {
    const [name, setName] = useLocalStorage("demo-name", "");

    return (
        <div>
            <h3>LocalStorage Demo</h3>
            <p>Type your name — it persists across page refreshes.</p>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <p>Stored value: {name}</p>
        </div>
    );
};
