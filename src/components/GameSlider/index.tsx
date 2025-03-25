import Slider from 'react-slick';
import {sliderList} from '../../constants';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from '../ui/Image';
import GameSliderArrow from '../GameSliderArrow';

const GameSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    nextArrow: (
      <GameSliderArrow src="src/assets/catarrowright.png" orientation="right" />
    ),
    prevArrow: (
      <GameSliderArrow src="src/assets/catarrowleft.png" orientation="left" />
    ),
  };

  return (
    <div className="relative w-full h-10 flex items-center">
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

export default GameSlider;
