import Image from '../ui/Image';
import Profile from '../Profile';
import Transaction from '../Transaction';
import Information from '../Information';
import Helper from '../Helper';

const Footer = () => {
  return (
    <div className="relative w-full h-[7.79rem]">
      <Transaction />
      <Profile />
      <Image src="src/assets/navbar.png" alt="navbar" />
      <Information />
      <Helper />
    </div>
  );
};

export default Footer;
