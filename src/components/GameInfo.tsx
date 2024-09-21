interface AotWConfig {
  game: {
    id: number; title: string;
  };
  consoleId: number;
} 

const GameInfo = ({ game, consoleId }:AotWConfig) => {
  return (
    <div className="gap-x-2 flex relative">
      <a
        href={`https://retroachievements.org/game/${game.id}`}
      >
        <img
          src={`https://media.retroachievements.org/Images/084628.png`}
          alt="Achievement of the week game badge"
          width="32"
          height="32"
          className="w-8 h-8"
        />
        <p className="absolute max-w-fit pl-4 top-[-4px] left-6 font-semibold mb-0.5 text-xs">
          {game.title}
          <span className="tag">
            <span>Hack</span>
          </span>
        </p>
      </a>

      <div>
        <a href={`https://retroachievements.org/gameList.php?c=${consoleId}`} className="flex items-center gap-x-1 -mt-1">
          <img src={`https://static.retroachievements.org/assets/images/system/nes.png`} width="18" height="18" alt="Console icon" />
          <span className="block text-xs tracking-tighter">NES/Famicom</span>
        </a>
      </div>
    </div>
  );
};

export default GameInfo;
