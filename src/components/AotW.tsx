import AchievementBadge from './AchievBadge';
import GameInfo from './GameInfo';
import TimeLeft from './TimeLeft';
import { AotWConfig } from '../assets/types';
import './style/AotW.css'


const AotW = ({ achievement, console, startAt, game}:AotWConfig) => {
  return (
  <div className="aotw">
    <h3 className="aotw-title">Achievement of the Week</h3>
    <div className="aotw-content">
      <AchievementBadge achievement={achievement} />
      <div className="aotw-divider" />
      <GameInfo game={game} console={console} />
    </div>
      <TimeLeft startAt={startAt} />
  </div>

  );
};

export default AotW;
