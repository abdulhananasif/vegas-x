import {usePagination} from 'react-use-pagination';
import {gamesList} from '../../constants';
import GameView from '../GameView';
import PaginationControl from '../PaginationControl';
import GameNavigationArrows from '../GameNavigationArrows';
import Extra from '../Extra';

const GamesList = () => {
  const itemsPerPage = 15;
  const totalItems = gamesList.length;
  const {currentPage, setNextPage, setPreviousPage, previousEnabled} =
    usePagination({totalItems});
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

  return (
    <div className="flex flex-col justify-center items-center gap-4 relative">
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
      <Extra
        customClass="left-0"
        icons={[
          {path: 'src/assets/myjp_icon.png', customClass: 'w-32 h-32'},
          {path: 'src/assets/music_off.png', customClass: 'w-20 h-20'},
        ]}
      />
      <Extra
        customClass="right-4"
        icons={[
          {path: 'src/assets/favorites.png', customClass: 'w-20 h-20'},
          {path: 'src/assets/gear_normal.png', customClass: 'w-20 h-20'},
        ]}
      />
      <PaginationControl currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
};

export default GamesList;
