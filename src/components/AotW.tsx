import AchievementBadge from './AchievBadge';
import GameInfo from './GameInfo';

interface AotWConfig {
  achievement: {
    id: number;
    title: string;
    description: string;
    points: number;
    trueRatio: number;
    author: string;
    dateCreated: string;
    dateModified: string;
    badgeName: string;
    badgeUrl: string;
}
  game: {
    id: number; title: string;
  };
  consoleId: number;
} 

const AotW = ({ achievement, game, consoleId }:AotWConfig) => {
  return (
    <div className="component">
      <h3>Achievement of the Week</h3>
      <div className="bg-embed p-4 rounded border border-embed-highlight">
        <AchievementBadge achievement={achievement} />
        <hr className="border-embed-highlight mt-2 mb-3" />
        <GameInfo game={game} consoleId={consoleId} />
      </div>
    </div>
  );
};

export default AotW;
