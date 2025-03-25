import Image from '../ui/Image';

const Footer = () => {
  return (
    <div className="relative w-full">
      <div className="absolute left-0"></div>
      <div className="absolute right-0 -translate-y-20 top-0 z-100">
        <Image src="src/assets/lvl_bg.png" alt="lvl" className="w-60 h-10" />
        <Image
          src="src/assets/lvl_progress.png"
          alt="progress"
          className="w-10 h-9 "
        />
      </div>
      <Image
        src="src/assets/navbar.png"
        alt="navbar"
        className="absolute left-0 bottom-0 right-0"
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
