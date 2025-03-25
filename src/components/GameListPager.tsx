import {gamesList} from '../constants';
import {usePagination} from 'react-use-pagination';

const GameListPager = () => {
  const itemsPerPage = 15; // 5x3 grid, so 15 items per page
  const totalItems = gamesList.length;

  const {
    currentPage,
    totalPages,
    setNextPage,
    setPreviousPage,
    nextEnabled,
    previousEnabled,
  } = usePagination({totalItems});

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return (
    <div className="flex flex-col justify-center items-center h-screen">
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

      {/* Pagination Controls */}
      <div className="flex items-center gap-4 mt-4">
        <button
          onClick={setPreviousPage}
          disabled={!previousEnabled}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span>
          Page {currentPage + 1} of {totalPages}
        </span>
        <button
          onClick={setNextPage}
          disabled={!nextEnabled}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default GameListPager;
