import Image from '../ui/Image';

const Footer = () => {
  return (
    <div className="relative w-full h-[138px]">
      <div className="absolute  left-10 translate-y-3 top-0 z-100 flex  flex-col gap-4">
        <div className="flex w-[18vw] justify-between items-center">
          <div>
            <p className="text-yellow-500 font-extrabold text-4xl">BALANCE</p>
          </div>
          <div className="flex gap-2">
            <Image src="src/assets/en.png" alt="flag-en" className="h-7 w-10" />
            <Image
              src="src/assets/layout_15.png"
              alt="flag-en"
              className="h-7 w-10"
            />
          </div>
        </div>
        <div className="flex w-[18vw] justify-center gap-3 items-center">
          <div>
            <p className="text-white font-extrabold text-3xl">12023</p>
          </div>
          <div className="flex flex-col text-center justify-center w-38 p-2 gap-2 bg-[url('src/assets/botbutton_down.png')]">
            <p className="text-yellow-300 text-sm font-semibold">
              CASHBACK BONUS
            </p>
            <p className="text-white font-medium">1560</p>
          </div>
        </div>
      </div>{' '}
      <div className="absolute right-12 translate-y-4 top-0 z-100 flex flex-col gap-5">
        <div>
          <Image
            src="src/assets/lvl_bg.png"
            alt="lvl"
            className="w-60 h-10 relative"
          />
          <Image
            src="src/assets/lvl_progress.png"
            alt="progress"
            className="w-10 h-9 absolute top-0.5 bottom-0.5 left-0.5"
          />
          <p className="text-xl absolute top-1.5 left-21 text-yellow-500 font-extrabold">
            Kobi
          </p>
          <p className="text-2xl absolute top-1 right-2.5 text-blue-500 font-extrabold">
            3
          </p>
        </div>
        <div className="flex gap-5 items-center">
          <p className="text-3xl font-extrabold text-yellow-500">20:21</p>\
          <p className="text-3xl font-extrabold text-white">Find...</p>
        </div>
      </div>
      <Image src="src/assets/navbar.png" alt="navbar" />
      <Image
        src="src/assets/topbar.png"
        alt="topbar"
        className="h-[10vh] w-full"
      />
      <Image
        src="src/assets/wager_box.png"
        alt="wager_box"
        className="absolute bottom-3 left-[37%] -translate-x-1/2 h-[11vh]"
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
            className="h-18"
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
            className="h-18"
          />
          <p className="absolute inset-0 flex items-center justify-center text-white font-extrabold text-xl">
            HELP
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
