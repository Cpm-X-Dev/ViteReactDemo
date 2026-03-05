/**
 * Activity 3: useState — Object State
 *
 * Goal: Manage an object in state and update individual fields immutably.
 *
 * Instructions:
 * 1. Import useState from React
 * 2. Create state with the initial user object provided below
 * 3. Complete the updateName and updateEmail functions
 *    - They must create a NEW object (spread the old one), not mutate
 * 4. Wire up the inputs to update state on change
 */

// TODO: Import useState from "react"

type User = {
    name: string;
    email: string;
};

const initialUser: User = {
    name: "Chris",
    email: "chris@example.com",
};

export const UserProfile = () => {
    // TODO: Create state `user` initialized with `initialUser`
    // const [user, setUser] = useState(...)

    // TODO: Complete these functions using the spread operator
    // They should create a new object, not mutate the existing one
    const updateName = (_newName: string) => {
        // setUser({ ...user, name: newName })
    };

    const updateEmail = (_newEmail: string) => {
        // setUser({ ...user, email: newEmail })
    };

    return (
        <div>
            <h3>User Profile</h3>
            <div>
                <label>Name: </label>
                <input
                    type="text"
                    value={initialUser.name /* TODO: Use user.name from state instead */}
                    onChange={(e) => updateName(e.target.value)}
                />
            </div>
            <div>
                <label>Email: </label>
                <input
                    type="email"
                    value={initialUser.email /* TODO: Use user.email from state instead */}
                    onChange={(e) => updateEmail(e.target.value)}
                />
            </div>
            <p>Current: {initialUser.name} ({initialUser.email})</p>
            {/* TODO: Replace initialUser.name/email above with user.name/email from state */}
        </div>
    );
};
