import { buildAuthorization, getAchievementOfTheWeek, AchievementOfTheWeek } from "@retroachievements/api";
import { useState, useEffect } from "react";
import AotW from "./AotW";


function FetchData() {
    const username = import.meta.env.VITE_USERNAME;
    const webApiKey = import.meta.env.VITE_API_KEY;

    const authorization = buildAuthorization({ username, webApiKey });

    const [data, setData] = useState<AchievementOfTheWeek | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [retryCount, setRetryCount] = useState(0);

    const fetchAchievement = async () => {
        try {
            const achievementOfTheWeek = await getAchievementOfTheWeek(authorization);
            setData(achievementOfTheWeek);
            setRetryCount(0);
        } catch (error) {
            if (error instanceof Error) {
                if (error.message === 'Too many requests' && retryCount < 3) {
                    setTimeout(() => {
                        setRetryCount(retryCount + 1);
                        fetchAchievement();
                    }, 2000); // 2 seconds delay retry
                } else {
                    setError('Failed to fetch data');
                }
            }
        }
    };

    useEffect(() => {
        // initial fetch
        fetchAchievement();

        // 5 minutes interval between calls
        const intervalId = setInterval(fetchAchievement, 300000);

        return () => clearInterval(intervalId);
    }, []);

    if (error) return <p>{error}</p>;
    if (!data) return <p>Loading...</p>;

    return (
        <AotW achievement={data.achievement} game={data.game} consoleId={data.console.id} />
    );
}

export default FetchData;
