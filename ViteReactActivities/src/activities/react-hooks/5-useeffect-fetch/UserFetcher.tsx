/**
 * Activity 5: useEffect — Fetch Data
 *
 * Goal: Fetch user data from an API on mount and display it with a loading state.
 *
 * Instructions:
 * 1. Import useState and useEffect from React
 * 2. Create state for `user` (User | null, initial null) and `loading` (boolean, initial true)
 * 3. In useEffect, fetch from "https://jsonplaceholder.typicode.com/users/1"
 * 4. Parse the JSON response and set it to `user` state
 * 5. Set `loading` to false after the fetch completes
 * 6. Show "Loading..." while loading, then display user's name and email
 */

// TODO: Import useState and useEffect from "react"

type User = {
    id: number;
    name: string;
    email: string;
};

// This URL will be used in your useEffect fetch call
const API_URL: User["id"] extends number ? string : never = "https://jsonplaceholder.typicode.com/users/1";

export const UserFetcher = () => {
    console.log("Fetch from:", API_URL); // Remove this after implementing useEffect
    // TODO: Create state `user` of type User | null, initialized to null
    // TODO: Create state `loading` of type boolean, initialized to true

    // TODO: Use useEffect to:
    //   1. Call fetch("https://jsonplaceholder.typicode.com/users/1")
    //   2. Parse the response as JSON
    //   3. Set the parsed data to `user` state
    //   4. Set `loading` to false
    //   5. Use an empty dependency array []

    // TODO: If loading is true, return <p>Loading...</p>

    // TODO: If user is null (fetch failed), return <p>No user found.</p>

    return (
        <div>
            <h3>User Info</h3>
            {/* TODO: Display user.name and user.email */}
            <p>Name: ???</p>
            <p>Email: ???</p>
        </div>
    );
};
