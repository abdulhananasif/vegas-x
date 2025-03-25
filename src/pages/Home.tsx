import Footer from '../components/Footer';
import GamesList from '../components/GamesList';
import Header from '../components/Header';
import MainLogo from '../components/MainLogo';

const Home = () => {
  return (
    // <div>
    <div className=" bg-[url('src/assets/bg.jpg')] bg-no-repeat bg-center h-screen flex flex-col">
      <Header />
      <div
        style={{height: 'calc(100vh - 14.54rem)'}}
        className="flex flex-col justify-evenly"
      >
        <MainLogo />
        <GamesList />
      </div>
      {/* <div className="h-15"></div> */}
      <div className="fixed bottom-0">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
