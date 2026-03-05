/**
 * Activity 2: useState — Toggle
 *
 * Goal: Toggle between "light" and "dark" theme using a boolean state.
 *
 * Instructions:
 * 1. Import useState from React
 * 2. Create a boolean state variable `isDark` initialized to false
 * 3. Toggle it when the button is clicked
 * 4. Apply different background and text colors based on the state
 * 5. Display "Dark Mode" or "Light Mode" text
 */

// TODO: Import useState from "react"

export const ThemeToggle = () => {
    // TODO: Create a boolean state `isDark`, initialized to false

    // TODO: Set backgroundColor and color based on isDark
    //   isDark=true  -> backgroundColor: "#1f2937", color: "#f9fafb"
    //   isDark=false -> backgroundColor: "#f9fafb", color: "#1f2937"
    const themeStyle = {
        backgroundColor: "#f9fafb",
        color: "#1f2937",
        padding: "1rem",
        borderRadius: "4px",
    };

    return (
        <div style={themeStyle}>
            <h3>{/* TODO: Show "Dark Mode" or "Light Mode" based on isDark */}</h3>
            <button onClick={() => {/* TODO: Toggle isDark */}}>
                Toggle Theme
            </button>
        </div>
    );
};
