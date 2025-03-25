import {ReactNode, useState} from 'react';
import Image from '../ui/Image';

interface GameNavigationArrowsProps {
  children: ReactNode;
  previousEnabled: boolean;
  setPreviousPage: () => void;
  setNextPage: () => void;
  currentPage: number;
  totalPages: number;
}
const GameNavigationArrows = ({
  children,
  previousEnabled,
  setPreviousPage,
  setNextPage,
  currentPage,
  totalPages,
}: GameNavigationArrowsProps) => {
  const [transitionState, setTransitionState] = useState(0);

  const handlePrevPage = () => {
    if (previousEnabled) {
      setTransitionState(-1);
      setTimeout(() => {
        setPreviousPage();
        setTransitionState(0);
      }, 200);
    }
  };
  const handleNextPage = () => {
    if (currentPage + 1 < totalPages) {
      setTransitionState(1);
      setTimeout(() => {
        setNextPage();
        setTransitionState(0);
      }, 200);
    }
  };
  return (
    <div className="flex items-center gap-8">
      <div className="h-[10rem] w-[6rem]">
        <Image
          className={`cursor-pointer rounded w-full h-full ${
            !previousEnabled ? 'opacity-70 cursor-not-allowed' : ''
          }`}
          src="src/assets/leftarrow.png"
          onClick={handlePrevPage}
          alt="Previous Page"
        />
      </div>
      <div
        className={`grid grid-cols-5 grid-rows-3 gap-3 transform transition-transform duration-50 ease-in-out ${
          transitionState === 1
            ? '-translate-x-[100%] opacity-0'
            : transitionState === -1
            ? 'translate-x-[100%] opacity-0'
            : 'translate-x-0 opacity-100'
        }`}
      >
        {children}
      </div>
      <div className="h-[10rem] w-[6rem]">
        <Image
          className={`cursor-pointer rounded w-full h-full ${
            currentPage + 1 >= totalPages ? 'opacity-70 cursor-not-allowed' : ''
          }`}
          src="src/assets/rightarrow.png"
          onClick={handleNextPage}
          alt="Next Page"
        />
      </div>
    </div>
  );
};

export default GameNavigationArrows;
