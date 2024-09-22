import './style/AchievBadge.css'
import { Achievement } from '../assets/types';
import './style/AchievBadge.css';

interface AchievBadgeProps {
  achievement: Achievement;
}

  const AchievementBadge = ({ achievement }:AchievBadgeProps) => {
    return (
      <div className="achievement-badge">
        <a href={`https://retroachievements.org/achievement/${achievement.id}`}>
          <img
            src={`https://media.retroachievements.org/Badge/${achievement.badgeName}.png`}
            alt="Achievement of the week badge"
            className="achievement-badge-image"
          />
        </a>
  
        <div className="achievement-details">
          <a
            href={`https://retroachievements.org/achievement/${achievement.id}`}
            className="achievement-title"
          >
            {achievement.title}
          </a>
          <p className="achievement-points">
            {achievement.points} <span className="true-ratio">({achievement.trueRatio})</span> Points
          </p>
          <p className="achievement-description">{achievement.description}</p>
        </div>
      </div>
    );
  };
  


export default AchievementBadge;
