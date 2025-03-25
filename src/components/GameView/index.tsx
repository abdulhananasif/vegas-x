import {Game} from '../../types/game';
import Image from '../ui/Image';

interface GameViewProps {
  game: Game;
}

const GameView = ({game}: GameViewProps) => {
  return (
    <div className="relative flex justify-center items-center">
      <Image
        src={game.path}
        className="w-60 h-26 rounded-lg"
        alt={`Game ${game.id}`}
      />
      <Image
        src="src/assets/frame 2.png"
        className="absolute inset-0 w-full h-full rounded-lg"
        alt="Frame"
      />
    </div>
  );
};

export default GameView;
