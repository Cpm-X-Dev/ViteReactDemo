/**
 * Activity 3: Form Validation
 *
 * Goal: Validate form fields and display error messages.
 *
 * Instructions:
 * 1. Import useState from React
 * 2. Create state for `email`, `password`, and `errors` (object with email/password keys)
 * 3. On submit, validate:
 *    - Email must not be empty
 *    - Email must contain "@"
 *    - Password must be at least 6 characters
 * 4. If validation fails, set error messages and DO NOT submit
 * 5. If validation passes, log "Login successful" and clear errors
 * 6. Display error messages below each field (in red)
 */

// TODO: Import useState from "react"

type LoginErrors = {
    email: string;
    password: string;
};

const initialErrors: LoginErrors = { email: "", password: "" };

export const LoginForm = () => {
    // TODO: Create state `email` (string, "")
    // TODO: Create state `password` (string, "")
    // TODO: Create state `errors` (LoginErrors, initialized with initialErrors)
    console.log("Error template:", initialErrors); // Remove this after wiring up state

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // TODO: Create a new errors object
        // TODO: Validate email:
        //   - If empty: "Email is required."
        //   - If no "@": "Please enter a valid email."
        // TODO: Validate password:
        //   - If less than 6 chars: "Password must be at least 6 characters."

        // TODO: If any errors exist, set them to state and return early

        // TODO: If no errors, log "Login successful" and clear the errors
        console.log("Form submitted");
    };

    return (
        <div>
            <h3>Login</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email: </label>
                    <input
                        type="text"
                        value={"" /* TODO: Bind to email state */}
                        onChange={(e) => {
                            // TODO: Update email state
                            console.log(e.target.value);
                        }}
                    />
                    {/* TODO: If errors.email is not empty, show it in a <p> with red color */}
                </div>
                <div>
                    <label>Password: </label>
                    <input
                        type="password"
                        value={"" /* TODO: Bind to password state */}
                        onChange={(e) => {
                            // TODO: Update password state
                            console.log(e.target.value);
                        }}
                    />
                    {/* TODO: If errors.password is not empty, show it in a <p> with red color */}
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};
