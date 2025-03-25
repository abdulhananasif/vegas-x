import {usePagination} from 'react-use-pagination';
import {gamesList} from '../../constants';
import GameView from '../GameView';
import PaginationControl from '../PaginationControl';
import GameNavigationArrows from '../GameNavigationArrows';

const GamesList = () => {
  const itemsPerPage = 15;
  const totalItems = gamesList.length;
  const {currentPage, setNextPage, setPreviousPage, previousEnabled} =
    usePagination({totalItems});
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <GameNavigationArrows
        previousEnabled={previousEnabled}
        setNextPage={setNextPage}
        setPreviousPage={setPreviousPage}
        currentPage={currentPage}
        totalPages={totalPages}
      >
        {gamesList.slice(startIndex, endIndex).map((game) => (
          <GameView game={game} key={game.id} />
        ))}
      </GameNavigationArrows>
      <PaginationControl currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
};

export default GamesList;
