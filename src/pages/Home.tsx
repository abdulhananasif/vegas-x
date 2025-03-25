import Footer from '../components/Footer';
import GameSlider from '../components/GameSlider';
import GamesList from '../components/GamesList';
import MainLogo from '../components/MainLogo';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div className=" bg-[url('src/assets/bg.jpg')] bg-[120%] bg-no-repeat bg-left h-screen flex flex-col justify-between">
      <div>
        <Navbar />
        <GameSlider />
      </div>
      <MainLogo />
      <GamesList />
      <Footer />
    </div>
  );
};

export default Home;
