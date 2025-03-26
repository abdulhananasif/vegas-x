import Image from '../ui/Image';

const Information = () => {
  return (
    <>
      <div className="h-24 absolute bottom-0 left-[37%]">
        <Image
          src="/wager_box.png"
          alt="wager_box"
          className="-translate-x-1/2 h-full"
        />
      </div>
      <p className="absolute -bottom-10 left-[38%] -translate-x-1/2 h-[12vh] w-[21rem]  text-white text-sm font-semibold">
        BALANCE 12023 CHARGEABLE BALANCE 5995 WAGER GOOD CASHBACK BONUS 1560
        DAILY BONUS 28
      </p>
    </>
  );
};

export default Information;
