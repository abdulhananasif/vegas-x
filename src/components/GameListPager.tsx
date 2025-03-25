import {gamesList} from '../constants';
import {usePagination} from 'react-use-pagination';

const GameListPager = () => {
  const itemsPerPage = 15;
  const totalItems = gamesList.length;

  const {
    currentPage,
    setNextPage,
    setPreviousPage,
    nextEnabled,
    previousEnabled,
  } = usePagination({totalItems});

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems); // Avoid going out of bounds

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex space-around items-center">
        {/* Left Arrow */}
        <img
          className={`cursor-pointer rounded h-[10rem] w-[6rem] ${
            !previousEnabled ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          src="src/assets/leftarrow.png"
          onClick={() => previousEnabled && setPreviousPage()}
          alt="Previous Page"
        />

        {/* Game Grid */}
        <div className="grid grid-cols-5 grid-rows-3 gap-3 p-4">
          {gamesList.slice(startIndex, endIndex).map((game) => (
            <div
              key={game.id}
              className="relative flex justify-center items-center"
            >
              <img
                src={game.path}
                className="w-60 h-32 rounded-lg"
                alt={`Game ${game.id}`}
              />
              <img
                src="src/assets/frame 2.png"
                className="absolute inset-0 w-full h-full rounded-lg"
                alt="Frame"
              />
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <img
          className={`cursor-pointer rounded h-[10rem] w-[6rem] ${
            currentPage + 1 >= totalPages ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          src="src/assets/rightarrow.png"
          onClick={() => currentPage + 1 < totalPages && setNextPage()}
          alt="Next Page"
        />
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center gap-4 mt-4">
        <span>
          Page {currentPage + 1} of {totalPages}
        </span>
      </div>
    </div>
  );
};

export default GameListPager;
