import Image from '../ui/Image';

const Footer = () => {
  return (
    <div className="relative w-full h-[138px]">
      <div className="absolute  left-10 translate-y-3 top-0 z-100 flex  flex-col ">
        <div className="flex w-[18vw] justify-between items-center">
          <div>
            <p className="text-yellow-500 font-extrabold text-4xl">BALANCE</p>
          </div>
          <div className="flex gap-2">
            <Image src="src/assets/en.png" alt="flag-en" className="h-5 w-10" />
            <Image
              src="src/assets/layout_15.png"
              alt="flag-en"
              className="h-5 w-10"
            />
          </div>
        </div>
        <div className="flex w-[18vw] justify-center gap-5 mt-10 items-center">
          <div>
            <p className="text-white font-extrabold text-4xl">12023</p>
          </div>
          <div className="flex flex-col justify-center gap-2 bg-[url('src/assets/botbutton_down.png')]">
            <p className="text-yellow-300 text-sm font-bold">CASHBACK BONUS</p>
            <p className="text-white font-medium">1560</p>
          </div>
        </div>
      </div>{' '}
      <div className="absolute right-35 translate-y-4 top-0 z-100">
        <Image src="src/assets/lvl_bg.png" alt="lvl" className="w-60 h-10" />
        <Image
          src="src/assets/lvl_progress.png"
          alt="progress"
          className="w-10 h-9 "
        />
      </div>
      <Image src="src/assets/navbar.png" alt="navbar" />
      <Image
        src="src/assets/topbar.png"
        alt="topbar"
        className="opacity-70 h-[10px]"
      />
      <Image
        src="src/assets/wager_box.png"
        alt="wager_box"
        className="absolute bottom-2 left-[37%] -translate-x-1/2 h-[12vh]"
      />
      <p className="absolute -bottom-1 left-[38%] -translate-x-1/2 h-[12vh] w-[21rem]  text-white text-sm font-semibold">
        BALANCE 12023 CHARGEABLE BALANCE 5995 WAGER GOOD CASHBACK BONUS 1560
        DAILY BONUS 28
      </p>
      <div className="absolute bottom-1 right-[12%] -translate-x-1/2 h-[12vh] flex items-center space-x-4">
        {/* Left Image with Text */}
        <div className="relative">
          <Image
            src="src/assets/botbutton_main.png"
            alt="botbutton"
            className="h-20"
          />
          <p className="absolute inset-0 flex items-center justify-center text-white font-extrabold text-xl">
            LOGOUT
          </p>
        </div>

        {/* Right Image with Text */}
        <div className="relative">
          <Image
            src="src/assets/botbutton_main.png"
            alt="botbutton"
            className="h-20"
          />
          <p className="absolute inset-0 flex items-center justify-center text-white font-extrabold text-xl py-2">
            HELP
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
