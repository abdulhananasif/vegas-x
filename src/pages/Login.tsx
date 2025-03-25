import LoginForm from '../components/forms/Login';
import Image from '../components/ui/Image';

const Login = () => {
  return (
    <div className='flex flex-col min-h-screen bg-[url("src/assets/vegas-x2.jpg")] bg-cover w-screen relative bg-center'>
      <div className="flex flex-col lg:flex-row !mt-24 gap-2">
        <div className="w-full lg:w-[55%]">
          <div className="float-right">
            <Image
              src="src/assets/vegas-logo.png"
              alt="logo"
              className="w-xl"
            />
          </div>
        </div>
        <div className="hidden lg:block lg:w-[5%]" />
        <div className="w-full lg:w-[30%] flex items-center">
          <div className="max-w-md w-[330px] !p-5 !px-7 rounded-2xl bg-[#8095BF] h-[80%] opacity-90 ">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
