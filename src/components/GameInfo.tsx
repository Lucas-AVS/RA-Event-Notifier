import { GameExtended } from '@retroachievements/api';
import './style/GameInfo.css';

interface AotWConfig {
  console: { id: number; title: string };
  game: GameExtended | null;
}

const GameInfo = ({ console, game }: AotWConfig) => {
  if (game === null) {
    return <p className="game-title">Failed to fetch game data</p>;
  }

  return (
    <div className="game-info">
      <a href={`https://retroachievements.org/game/${game.id}`}>
        <img
          src={`https://media.retroachievements.org/${game.imageIcon}`}
          alt="Achievement of the week game badge"
          className="game-badge"
        />
      </a>
      <div className="game-console">
      <p className="game-title">
          {game.title}
          {/* future type of game feature
          <span className="game-tag">
            {customGame}
          </span> */}
        </p>
        <div className="console-info">
        <a href={`https://retroachievements.org/gameList.php?c=${console.id}`} className="console-link">
          <img
            src={`https://static.retroachievements.org/assets/images/system/nes.png`} //static image, get each console image latter
            width="18"
            height="18"
            alt="Console icon"
            />
          <span className="console-name">{console.title}</span>
        </a>
        </div>
      </div>
    </div>
  );
};

export default GameInfo;
