import Image from '../ui/Image';

const Footer = () => {
  return (
    <div className="w-full bg-no-repeat">
      <Image
        src="src/assets/navbar.png"
        alt="navbar"
        className="absolute left-0 bottom-0 right-0"
      />
      <Image
        src="src/assets/wager_box.png"
        alt="wager_box"
        className="absolute bottom-0 left-[35%] -translate-x-1/2 h-20"
      />
      <div className="absolute -bottom-1 right-[14%] -translate-x-1/2 h-20 flex items-center space-between">
        <Image
          src="src/assets/botbutton_main.png"
          alt="botbutton"
          className="h-20"
        />
        <Image
          src="src/assets/botbutton_main.png"
          alt="botbutton"
          className="h-20"
        />
      </div>
    </div>
  );
};

export default Footer;
