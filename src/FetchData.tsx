import { buildAuthorization, getAchievementOfTheWeek, AchievementOfTheWeek } from "@retroachievements/api";
import { useEffect, useState } from "react";

function FetchData() {
    const username = import.meta.env.VITE_USERNAME;
    const webApiKey = import.meta.env.VITE_API_KEY;

    const authorization = buildAuthorization({ username, webApiKey });
    const [achievement, setAchievement] = useState<AchievementOfTheWeek | null>(null);

    useEffect(() => {
        async function getToken() {
            const achievementOfTheWeek = await getAchievementOfTheWeek(authorization);
            setAchievement(achievementOfTheWeek);
        }
        getToken();
    }, [authorization]);

    const AotWImage = achievement ? `https://retroachievements.org${achievement.achievement.badgeUrl}` : '';

    return (
        <div>
            {achievement && <img src={AotWImage} alt="Achievement of the Week" />}
        </div>
    );
}

export default FetchData;
