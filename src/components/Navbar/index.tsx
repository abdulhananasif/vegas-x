import Image from '../ui/Image';

const Navbar = () => {
  return (
    <div className="h-15 w-full">
      <Image
        src="src/assets/jackpot_bar.png"
        alt="jackpot"
        className="relative h-full w-full"
      />
    </div>
  );
};

export default Navbar;
