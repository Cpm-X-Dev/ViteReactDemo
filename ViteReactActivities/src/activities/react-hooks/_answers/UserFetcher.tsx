import { useState, useEffect } from "react";

type User = {
    id: number;
    name: string;
    email: string;
};

export const UserFetcher = () => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/1")
            .then((res) => res.json())
            .then((data: User) => {
                setUser(data);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;
    if (!user) return <p>No user found.</p>;

    return (
        <div>
            <h3>User Info</h3>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
        </div>
    );
};
