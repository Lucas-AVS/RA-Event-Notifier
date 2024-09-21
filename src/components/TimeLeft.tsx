import { useState, useEffect } from 'react';

interface StartAtConfig {
    startAt: string;
}

function TimeLeft({ startAt }: StartAtConfig) {
    const [timeLeft, setTimeLeft] = useState<string>("");

    const startDateToEndData = (dateString: string): Date => {
        const date = new Date(dateString);
        date.setDate(date.getDate() + 7); // Add 7 days (week) to start date to calculate time left
        return date;
    };

    const calculateTimeLeft = () => {
        const startAtDate = startDateToEndData(startAt);
        const now = new Date();
        const difference = startAtDate.getTime() - now.getTime();

        if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((difference / 1000 / 60) % 60);
            const seconds = Math.floor((difference / 1000) % 60);

            setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
        } else {
            setTimeLeft("Time's up! Awaiting for the new AotW...");
        }
    };

    // every second time left
    useEffect(() => {
        const intervalId = setInterval(() => {
            calculateTimeLeft();
        }, 1000);

        return () => clearInterval(intervalId); // Cleanup do intervalo
    }, [startAt]);

    return (
        <p>Time left: {timeLeft}</p>
    );
}

export default TimeLeft;
