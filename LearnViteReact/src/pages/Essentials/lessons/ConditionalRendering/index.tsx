import { useState } from "react";
import styles from "./ConditionalRendering.module.css";

type BannerVariant = "info" | "warning" | "error";

const NotificationBanner = ({ variant }: { variant: BannerVariant }) => {
    const config: Record<BannerVariant, { text: string; className: string }> = {
        info: { text: "This is an informational message.", className: styles.bannerInfo },
        warning: { text: "Warning: please review your settings.", className: styles.bannerWarning },
        error: { text: "Error: something went wrong.", className: styles.bannerError },
    };

    const { text, className } = config[variant];

    return (
        <div className={`${styles.banner} ${className}`}>
            {text}
        </div>
    );
};

const ConditionalRendering = () => {
    const [variant, setVariant] = useState<BannerVariant>("info");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const cycleVariant = () => {
        const order: BannerVariant[] = ["info", "warning", "error"];
        const next = order[(order.indexOf(variant) + 1) % order.length];
        setVariant(next);
    };

    return (
        <div className={styles.lesson}>
            <header className={styles.lessonHeader}>
                <h2>Conditional Rendering</h2>
                <p className={styles.subtitle}>
                    Showing different UI based on state or props.
                </p>
            </header>

            <section className={styles.section}>
                <h3>What & Why</h3>
                <p>
                    React doesn't have <code>v-if</code> or special template directives.
                    Instead, you use plain JavaScript — ternaries, <code>&&</code> short-circuit,
                    and early returns. The JSX is just JavaScript, so any expression works.
                </p>
                <div className={styles.realLife}>
                    <strong>Real-life thinking:</strong> Every app has conditional UI. Loading
                    spinners while data fetches, error banners when something fails, "Admin"
                    buttons only for admin users, premium badges for paying customers. Netflix
                    shows different UI depending on your subscription tier. All of this is
                    conditional rendering.
                </div>
            </section>

            <section className={styles.section}>
                <h3>Interactive Demo</h3>
                <p>
                    Click to cycle the banner variant, and toggle the login state:
                </p>
                <div className={styles.demoBox}>
                    <NotificationBanner variant={variant} />
                    <button className={styles.toggleBtn} onClick={cycleVariant}>
                        Current: {variant} (click to cycle)
                    </button>

                    <p style={{ margin: 0, fontSize: "0.8rem" }}>
                        {isLoggedIn ? "Welcome back, user!" : "Please log in to continue."}
                    </p>
                    <button className={styles.toggleBtn} onClick={() => setIsLoggedIn(!isLoggedIn)}>
                        {isLoggedIn ? "Log Out" : "Log In"}
                    </button>
                </div>

                <div className={styles.codeBlock}>
                    <pre><code>{`// Ternary for inline either/or:
{isLoggedIn ? "Welcome back!" : "Please log in."}

// && short-circuit for show/hide:
{isAdmin && <button>Delete User</button>}

// Lookup object for multiple variants:
const config = {
    info: { text: "Info message", className: styles.bannerInfo },
    warning: { text: "Warning!", className: styles.bannerWarning },
    error: { text: "Error!", className: styles.bannerError },
};
const { text, className } = config[variant];`}</code></pre>
                </div>
            </section>

            <section className={styles.section}>
                <h3>Key Takeaways</h3>
                <p>
                    Use ternaries (<code>condition ? A : B</code>) when you need either/or.
                    Use <code>&&</code> when you want to show or hide something. Use a lookup
                    object or switch when there are 3+ variants. Early returns are great for
                    loading/error states at the top of a component.
                </p>
            </section>

            <section className={styles.section}>
                <h3>Practice Exercise</h3>
                <div className={styles.exerciseBox}>
                    <p>
                        Create an <code>OrderStatus</code> component that receives a
                        <code> status</code> prop and renders:
                    </p>
                    <ul>
                        <li>"pending" — yellow background, text "Order placed, waiting for confirmation"</li>
                        <li>"shipped" — blue background, text "Your order is on the way"</li>
                        <li>"delivered" — green background, text "Order delivered successfully"</li>
                        <li>"cancelled" — red background, text "Order has been cancelled"</li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default ConditionalRendering;
