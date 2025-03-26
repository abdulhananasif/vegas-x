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
      <Image src="/navbar.png" alt="navbar" className="hidden lg:block" />
      <div className="h-full bg-[#571BA0] w-screen" />
      <Information />
      <Helper />
    </div>
  );
};

export default Footer;
