interface achievConfig {
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
  }}

const AchievementBadge = ({ achievement }:achievConfig) => {
  return (
    <div className="flex gap-x-2 mb-3 text-text">
      <a href={`https://retroachievements.org/achievement/${achievement.id}`}>
        <img
          src={`https://media.retroachievements.org/Badge/${achievement.badgeName}.png`}
          alt="Achievement of the week badge"
          width="64"
          height="64"
          className="w-16 h-16"
        />
      </a>

      <div>
        <a
          href={`https://retroachievements.org/achievement/${achievement.id}`}
          className="font-semibold leading-4 text-link"
        >
          {achievement.title}
        </a>
        <p className="text-xs mb-1">
          {achievement.points} <span className="TrueRatio">({achievement.trueRatio})</span> Points
        </p>
        <p className="text-xs">{achievement.description}</p>
      </div>
    </div>
  );
};

export default AchievementBadge;
