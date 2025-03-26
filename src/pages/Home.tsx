import Footer from '../components/Footer';
import GameSlider from '../components/GameSlider';
import GamesList from '../components/GamesList';
import MainLogo from '../components/MainLogo';

const Home = () => {
  return (
    <div className=" bg-[url('/bg.jpg')] bg-no-repeat bg-center h-screen flex flex-col">
      <GameSlider />
      <div className="flex flex-col justify-evenly">
        <MainLogo />
        <GamesList />
      </div>
      <div className="fixed bottom-0">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
