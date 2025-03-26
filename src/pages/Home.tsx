import {useState} from 'react';
import Footer from '../components/Footer';
import GameSlider from '../components/GameSlider';
import GamesList from '../components/GamesList';
import MainLogo from '../components/MainLogo';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [changeLayout, setChangeLayout] = useState<boolean>(false);
  return (
    <div className=" bg-[url('/bg.jpg')] bg-no-repeat bg-center h-screen flex flex-col">
      {selectedCategory && (
        <div className="fixed h-screen w-screen flex items-center justify-center bg-black z-49">
          <p className="text-amber-400 text-9xl z-50 capitalize font-extrabold">
            {selectedCategory}
          </p>
        </div>
      )}
      <GameSlider setSelectedCategory={setSelectedCategory} />
      <div className="flex flex-col justify-evenly h-[70vh] lg:h-auto !mt-2">
        <MainLogo />
        <GamesList
          selectedCategory={selectedCategory}
          changeLayout={changeLayout}
        />
      </div>
      <div className="fixed bottom-0">
        <Footer setChangeLayout={setChangeLayout} />
      </div>
    </div>
  );
};

export default Home;
