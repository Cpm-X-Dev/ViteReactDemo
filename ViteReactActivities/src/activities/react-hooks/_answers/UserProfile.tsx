import { useState } from "react";

type User = {
    name: string;
    email: string;
};

const initialUser: User = {
    name: "Chris",
    email: "chris@example.com",
};

export const UserProfile = () => {
    const [user, setUser] = useState<User>(initialUser);

    const updateName = (newName: string) => {
        setUser({ ...user, name: newName });
    };

    const updateEmail = (newEmail: string) => {
        setUser({ ...user, email: newEmail });
    };

    return (
        <div>
            <h3>User Profile</h3>
            <div>
                <label>Name: </label>
                <input
                    type="text"
                    value={user.name}
                    onChange={(e) => updateName(e.target.value)}
                />
            </div>
            <div>
                <label>Email: </label>
                <input
                    type="email"
                    value={user.email}
                    onChange={(e) => updateEmail(e.target.value)}
                />
            </div>
            <p>Current: {user.name} ({user.email})</p>
        </div>
    );
};
