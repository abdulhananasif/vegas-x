import Slider from 'react-slick';
import {sliderList} from '../../constants';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from '../ui/Image';

const GameSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    nextArrow: <NextArrow />, // No need to pass an empty function
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="relative w-full h-20 flex items-center !-mt-[20px]">
      <Slider {...settings} className="w-full ">
        {sliderList.map((game) => (
          <div
            key={game.id}
            className="bg-[url('src/assets/botbutton_main.png')] !py-1 bg-center border border-left border-blue-900"
          >
            <Image
              src={game.path}
              alt={`Game ${game.id}`}
              className="h-12 w-full rounded"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

// Define props type explicitly
interface ArrowProps {
  onClick?: () => void;
}

// Custom Left Arrow
const PrevArrow: React.FC<ArrowProps> = ({onClick}) => (
  <button
    onClick={onClick}
    className="absolute left-0 top-1/2  transform -translate-y-1/2 z-20 bg-opacity-50"
  >
    <Image
      src="src/assets/catarrowleft.png"
      alt="arrow left"
      className="h-full w-20"
    />
  </button>
);

// Custom Right Arrow
const NextArrow: React.FC<ArrowProps> = ({onClick}) => (
  <button
    onClick={onClick}
    className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 bg-opacity-50 p-2 "
  >
    <Image
      src="src/assets/catarrowright.png"
      alt="arrow right"
      className="h-full w-20"
    />
  </button>
);

export default GameSlider;
