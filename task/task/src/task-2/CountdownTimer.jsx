import React, { useEffect, useState } from "react";

function CountdownTimer() {
    const [seconds, setSeconds] = useState(20);
    const [finished, setFinished] = useState(false);

    useEffect(() => {
        if (seconds <= 0) {
            setFinished(true);
            return;
        }

        const interval = setInterval(() => {
            setSeconds((prev) => prev - 1);
        }, 1000);


        return () => clearInterval(interval);
    }, [seconds]);

    return (
        <div>
            <h2>Countdown Timer</h2>

            {finished ? (
                <h3 style={{ color: "red" }}>Time's up!</h3>
            ) : (
                <h3>{seconds} seconds</h3>
            )}
        </div>
    );
}

export default CountdownTimer;
