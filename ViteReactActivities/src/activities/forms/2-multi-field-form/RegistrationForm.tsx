/**
 * Activity 2: Multi-Field Form
 *
 * Goal: Manage multiple form fields and handle form submission.
 *
 * Instructions:
 * 1. Import useState from React
 * 2. Create a state object with `username`, `email`, and `password` fields
 * 3. Create a handleChange function that updates the correct field
 *    based on the input's `name` attribute
 * 4. Handle form submission:
 *    - Prevent default browser behavior
 *    - Log the form data to the console
 *    - Reset all fields to empty strings
 */

// TODO: Import useState from "react"

type FormData = {
    username: string;
    email: string;
    password: string;
};

const initialFormData: FormData = {
    username: "",
    email: "",
    password: "",
};

export const RegistrationForm = () => {
    // TODO: Create state `formData` initialized with `initialFormData`
    console.log("Initial data:", initialFormData); // Remove this after wiring up state

    // TODO: Create a handleChange function that:
    //   - Receives a React.ChangeEvent<HTMLInputElement>
    //   - Reads e.target.name and e.target.value
    //   - Updates the corresponding field in formData immutably
    //     (spread the old object, override the changed field)

    // TODO: Create a handleSubmit function that:
    //   - Receives a React.FormEvent
    //   - Calls e.preventDefault()
    //   - Logs formData to console
    //   - Resets formData to initialFormData

    return (
        <div>
            <h3>Registration</h3>
            <form onSubmit={(e) => { e.preventDefault(); /* TODO: Call handleSubmit */ }}>
                <div>
                    <label>Username: </label>
                    <input
                        type="text"
                        name="username"
                        value={"" /* TODO: Bind to formData.username */}
                        onChange={() => { /* TODO: Call handleChange */ }}
                    />
                </div>
                <div>
                    <label>Email: </label>
                    <input
                        type="email"
                        name="email"
                        value={"" /* TODO: Bind to formData.email */}
                        onChange={() => { /* TODO: Call handleChange */ }}
                    />
                </div>
                <div>
                    <label>Password: </label>
                    <input
                        type="password"
                        name="password"
                        value={"" /* TODO: Bind to formData.password */}
                        onChange={() => { /* TODO: Call handleChange */ }}
                    />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};
