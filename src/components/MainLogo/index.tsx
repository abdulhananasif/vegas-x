import Image from '../ui/Image';

const MainLogo = () => {
  return (
    <div className="w-full flex justify-center">
      <div></div>
      <Image
        src="src/assets/logo 2.png"
        alt="logo"
        className="w-[35rem] h-18"
      />
      {/* <Image
        src="src/assets/dailybox.png"
        alt="dailybox"
        className="relative top-3 right-2 h-15 w-20"
      />
      <Image
        src="src/assets/goldbonusbg.png"
        alt="goldbonus"
        className="absolute z-50 h-11 w-15 top-30 right-4"
      /> */}
    </div>
  );
};

export default MainLogo;
