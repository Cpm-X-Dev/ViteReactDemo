import { useState, useEffect } from "react";

export const Timer = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSeconds((prev) => prev + 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <h3>Timer</h3>
            <p>
                Elapsed: <span>{seconds}</span>s
            </p>
        </div>
    );
};
