import {
    buildAuthorization,
    getAchievementOfTheWeek,
    AchievementOfTheWeek,
    getGameExtended,
    GameExtended
  } from "@retroachievements/api";
  import { useState, useEffect } from "react";
  import AotW from "./AotW";
  
  function FetchData() {
    const username = import.meta.env.VITE_USERNAME;
    const webApiKey = import.meta.env.VITE_API_KEY;
  
    const authorization = buildAuthorization({ username, webApiKey });
  
    const [data, setData] = useState<AchievementOfTheWeek | null>(null);
    const [game, setGame] = useState<GameExtended | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [retryCount, setRetryCount] = useState(0);
  
    const fetchCurrentGame = async (gameId: number) => {
      try {
        const currentGame = await getGameExtended(authorization, {
          gameId: gameId,
        });
        setGame(currentGame);
      } catch (error) {
        console.log(error);
      }
    };
  
    const fetchAchievement = async () => {
      try {
        const achievementOfTheWeek = await getAchievementOfTheWeek(authorization);
        setData(achievementOfTheWeek);
        setRetryCount(0);
      } catch (error) {
        if (error instanceof Error) {
          if (error.message === "Too many requests" && retryCount < 3) {
            setTimeout(() => {
              setRetryCount(retryCount + 1);
              fetchAchievement();
            }, 2000); // 2 seconds delay retry
          } else {
            setError("Failed to fetch data");
          }
        }
      }
    };
  
    // Fetch achievement data on component mount
    useEffect(() => {
      fetchAchievement();
  
      // Fetch achievement every 5 minutes
      const intervalId = setInterval(fetchAchievement, 300000);
      return () => clearInterval(intervalId);
    }, []);
  
    // Fetch game data when `data` is updated
    useEffect(() => {
      if (data) {
        fetchCurrentGame(data.game.id);
      }
    }, [data]);
  
    if (error) return <p>{error}</p>;
    if (!data) return <p>Loading...</p>;
  
    return (
      <AotW
        achievement={data.achievement}
        console={data.console}
        startAt={data.startAt}
        game={game}
      />
    );
  }
  
  export default FetchData;
  