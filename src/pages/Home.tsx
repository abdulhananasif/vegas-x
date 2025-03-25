import Footer from '../components/Footer';
import GameSlider from '../components/GameSlider';
import GamesList from '../components/GamesList';
import Image from '../components/ui/Image';

const Home = () => {
  return (
    <div className=" bg-[url('src/assets/bg.jpg')] bg-[120%] bg-no-repeat bg-left">
      <div>
        <Image
          src="src/assets/jackpot_bar.png"
          alt="jackpot"
          className="relative h-15 w-full"
        />
      </div>
      <GameSlider />
      <GamesList />
    </div>
  );
};

export default Home;
