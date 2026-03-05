import { useParams, Link } from "react-router";
import { users } from "./users";

const UserDetail = () => {
    const { userId } = useParams();
    const user = users.find((u) => u.id === Number(userId));

    if (!user) {
        return (
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <p style={{ margin: 0, fontSize: "0.85rem", color: "#dc2626", fontWeight: 700 }}>
                    User not found.
                </p>
                <p style={{ margin: 0, fontSize: "0.75rem", color: "#6b7280" }}>
                    No user with ID "{userId}" exists.
                </p>
                <Link to="/router/route-params" style={{ fontSize: "0.8rem" }}>
                    Back to user list
                </Link>
            </div>
        );
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <h3 style={{ margin: 0, fontSize: "0.9rem", color: "#1f2937" }}>
                {user.name}
            </h3>
            <p style={{ margin: 0, fontSize: "0.8rem", color: "#6b7280" }}>
                {user.role}
            </p>
            <p style={{ margin: 0, fontSize: "0.8rem", color: "#374151" }}>
                {user.email}
            </p>
            <p style={{ margin: 0, fontSize: "0.7rem", color: "#9ca3af" }}>
                URL param <code>userId</code> = "{userId}"
            </p>
            <Link to="/router/route-params" style={{ fontSize: "0.8rem" }}>
                Back to user list
            </Link>
        </div>
    );
};

export default UserDetail;
