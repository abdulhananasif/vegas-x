import {useState} from 'react';
import Footer from '../components/Footer';
import GameSlider from '../components/GameSlider';
import GamesList from '../components/GamesList';
import MainLogo from '../components/MainLogo';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  return (
    <div className=" bg-[url('/bg.jpg')] bg-no-repeat bg-center h-screen flex flex-col">
      <GameSlider setSelectedCategory={setSelectedCategory} />
      <div className="flex flex-col justify-evenly h-[70vh] lg:h-auto !mt-2">
        <MainLogo />
        <GamesList selectedCategory={selectedCategory} />
      </div>
      <div className="fixed bottom-0">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
