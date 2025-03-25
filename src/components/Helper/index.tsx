import Image from '../ui/Image';

const Helper = () => {
  return (
    <div className="absolute -bottom-7 right-[15%] -translate-x-1/2 h-[12vh] flex items-center space-x-4">
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
  );
};

export default Helper;
