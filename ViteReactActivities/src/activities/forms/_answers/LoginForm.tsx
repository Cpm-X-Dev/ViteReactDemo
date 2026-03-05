import { useState } from "react";

type LoginErrors = {
    email: string;
    password: string;
};

export const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState<LoginErrors>({ email: "", password: "" });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newErrors: LoginErrors = { email: "", password: "" };

        if (!email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!email.includes("@")) {
            newErrors.email = "Please enter a valid email.";
        }

        if (password.length < 6) {
            newErrors.password = "Password must be at least 6 characters.";
        }

        if (newErrors.email || newErrors.password) {
            setErrors(newErrors);
            return;
        }

        console.log("Login successful", { email, password });
        setErrors({ email: "", password: "" });
    };

    return (
        <div>
            <h3>Login</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email: </label>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && (
                        <p style={{ color: "#dc2626", fontSize: "0.75rem" }}>
                            {errors.email}
                        </p>
                    )}
                </div>
                <div>
                    <label>Password: </label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {errors.password && (
                        <p style={{ color: "#dc2626", fontSize: "0.75rem" }}>
                            {errors.password}
                        </p>
                    )}
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};
