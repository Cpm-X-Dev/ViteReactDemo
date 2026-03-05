import { useState } from "react";

export const NameForm = () => {
    const [name, setName] = useState("");

    return (
        <div>
            <h3>What's Your Name?</h3>
            <input
                type="text"
                placeholder="Type your name..."
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <p>Hello, {name || "stranger"}!</p>
        </div>
    );
};
