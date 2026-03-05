import { useState } from "react";

export const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(false);

    const themeStyle = {
        backgroundColor: isDark ? "#1f2937" : "#f9fafb",
        color: isDark ? "#f9fafb" : "#1f2937",
        padding: "1rem",
        borderRadius: "4px",
    };

    return (
        <div style={themeStyle}>
            <h3>{isDark ? "Dark Mode" : "Light Mode"}</h3>
            <button onClick={() => setIsDark((prev) => !prev)}>
                Toggle Theme
            </button>
        </div>
    );
};
