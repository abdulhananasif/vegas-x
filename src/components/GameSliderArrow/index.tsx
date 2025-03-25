import Image from '../ui/Image';

interface GameSliderArrowProps {
  src: string;
  onClick?: () => void;
  customClass?: string;
  orientation: 'left' | 'right';
}

const GameSliderArrow = ({
  src,
  onClick,
  customClass,
  orientation,
}: GameSliderArrowProps) => {
  return (
    <button
      onClick={onClick}
      className={`absolute top-1/2 cursor-pointer transform -translate-y-1/2 z-20 bg-opacity-50 ${customClass} ${orientation}-0`}
    >
      <Image src={src} alt={`arrow-${orientation}`} className="h-full w-20" />
    </button>
  );
};

export default GameSliderArrow;
