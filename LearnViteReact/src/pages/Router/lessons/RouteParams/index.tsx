import { Link } from "react-router";
import { users } from "./users";
import styles from "./RouteParams.module.css";

const RouteParams = () => {
    return (
        <div className={styles.lesson}>
            <header className={styles.lessonHeader}>
                <h2>Route Parameters</h2>
                <p className={styles.subtitle}>
                    Dynamic segments, useParams, and handling missing data.
                </p>
            </header>

            <section className={styles.section}>
                <h3>What & Why</h3>
                <p>
                    Dynamic route parameters let you create routes like <code>/users/:userId</code>
                    where <code>:userId</code> is a placeholder. The actual value comes from
                    the URL and is read with the <code>useParams()</code> hook. This powers
                    every detail page in every app.
                </p>
                <div className={styles.realLife}>
                    <strong>Real-life thinking:</strong> Dynamic routes power every detail
                    page — <code>/users/42</code>, <code>/products/iphone-15</code>,
                    <code>/posts/react-router-guide</code>. The URL carries data that your
                    component reads. Twitter uses <code>/username/status/123456</code> for
                    tweet pages. Amazon uses <code>/dp/B0PRODUCTID</code> for product pages.
                </div>
            </section>

            <section className={styles.section}>
                <h3>Interactive Demo</h3>
                <p>
                    Click a user below to navigate to their detail page using a dynamic route:
                </p>
                <div className={styles.demoBox}>
                    <div className={styles.userList}>
                        {users.map((user) => (
                            <Link
                                key={user.id}
                                to={`/router/route-params/user/${user.id}`}
                                className={styles.userLink}
                            >
                                {user.name}
                            </Link>
                        ))}
                        <Link to="/router/route-params/user/999" className={styles.userLink}>
                            Unknown User (404)
                        </Link>
                    </div>
                    <p style={{ margin: 0, fontSize: "0.7rem", color: "#9ca3af" }}>
                        Each link goes to <code>/router/route-params/user/:userId</code>.
                        Try the "Unknown User" link to see 404 handling.
                    </p>
                </div>

                <div className={styles.codeBlock}>
                    <pre><code>{`// Route definition (main.tsx):
<Route path="route-params/user/:userId" element={<UserDetail />} />

// Reading the param in the component:
import { useParams } from "react-router";

const UserDetail = () => {
    const { userId } = useParams();
    // userId is a string — parse to number if needed
    const user = users.find(u => u.id === Number(userId));

    if (!user) return <p>User not found.</p>;

    return <div>{user.name} — {user.email}</div>;
};`}</code></pre>
                </div>
            </section>

            <section className={styles.section}>
                <h3>Key Takeaways</h3>
                <p>
                    Route params (<code>:paramName</code>) are always strings — parse them
                    if you need numbers. Always handle the "not found" case when looking up
                    data by param. Use <code>useParams()</code> to read them. You can have
                    multiple params: <code>/posts/:postId/comments/:commentId</code>.
                </p>
            </section>

            <section className={styles.section}>
                <h3>Practice Exercise</h3>
                <div className={styles.exerciseBox}>
                    <p>
                        Extend the user detail demo:
                    </p>
                    <ul>
                        <li>Handle the case where <code>userId</code> is not a valid number</li>
                        <li>Add a "Back to list" link using <code>&lt;Link&gt;</code></li>
                        <li>Try navigating to <code>/router/route-params/user/999</code> — the "User not found" message should appear</li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default RouteParams;
