import { useState, useEffect } from 'react';
import './style/TimeLeft.css'

interface StartAtConfig {
    startAt: string;
}

function TimeLeft({ startAt }: StartAtConfig) {
    const [timeLeft, setTimeLeft] = useState<string>("");
    const [isTimeShort, setIsTimeShort] = useState<boolean>(false);

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

            // Se faltar menos de 24 horas
            if (difference < 24 * 60 * 60 * 1000) {
                setIsTimeShort(true); // Marca que o tempo está quase acabando
            } else {
                setIsTimeShort(false); // Tempo maior que 24h, então reseta o estado
            }
        } else {
            setTimeLeft("Time's up! Awaiting for the new AotW...");
            setIsTimeShort(false); // Tempo acabou, reseta o estado
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
        <div className={isTimeShort ? "time-left urgent" : "time-left"}>
            <p>Time left: {timeLeft}</p>
        </div>
    );
}

export default TimeLeft;
