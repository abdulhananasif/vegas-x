import {usePagination} from 'react-use-pagination';
import {gamesList} from '../../constants';
import Image from '../ui/Image';
import GameView from '../GameView';
import PaginationControl from '../PaginationControl';
import {useState} from 'react';

const GamesList = () => {
  const itemsPerPage = 15;
  const totalItems = gamesList.length;
  const {currentPage, setNextPage, setPreviousPage, previousEnabled} =
    usePagination({totalItems});
  const [transitionState, setTransitionState] = useState(0);
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const handleNextPage = () => {
    if (currentPage + 1 < totalPages) {
      setTransitionState(1);
      setTimeout(() => {
        setNextPage();
        setTransitionState(0);
      }, 200);
    }
  };
  const handlePrevPage = () => {
    if (previousEnabled) {
      setTransitionState(-1);
      setTimeout(() => {
        setPreviousPage();
        setTransitionState(0);
      }, 200);
    }
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex space-around items-center gap-3">
        <Image
          className={`cursor-pointer rounded h-[10rem] w-[6rem] ${
            !previousEnabled ? 'opacity-70 cursor-not-allowed' : ''
          }`}
          src="src/assets/leftarrow.png"
          onClick={handlePrevPage}
          alt="Previous Page"
        />
        <div
          className={`grid grid-cols-5 grid-rows-3 gap-3 p-4 transform transition-transform duration-50 ease-in-out ${
            transitionState === 1
              ? '-translate-x-[100%] opacity-0'
              : transitionState === -1
              ? 'translate-x-[100%] opacity-0'
              : 'translate-x-0 opacity-100'
          }`}
        >
          {gamesList.slice(startIndex, endIndex).map((game) => (
            <GameView game={game} key={game.id} />
          ))}
        </div>
        <Image
          className={`cursor-pointer rounded h-[10rem] w-[6rem] ${
            currentPage + 1 >= totalPages ? 'opacity-70 cursor-not-allowed' : ''
          }`}
          src="src/assets/rightarrow.png"
          onClick={handleNextPage}
          alt="Next Page"
        />
      </div>
      <PaginationControl currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
};

export default GamesList;
