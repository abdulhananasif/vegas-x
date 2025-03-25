import Image from '../ui/Image';

const Transaction = () => {
  return (
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
    </div>
  );
};

export default Transaction;
