import LoginForm from '../components/forms/Login';
import Image from '../components/ui/Image';

const Login = () => {
  return (
    <div className='flex flex-col min-h-screen bg-[url("src/assets/vegas-x2.jpg")] bg-cover w-screen relative bg-center'>
      <div className="flex flex-col lg:flex-row flex-1 px-[5rem] lg:px-[15rem] py-12 lg:py-16 space-y-8 lg:space-y-0 lg:space-x-10 z-10">
        <div className="w-full lg:w-1/2 lg:ms-20">
          <Image
            src="src/assets/vegas-logo.png"
            alt="logo"
            className="w-[25rem]"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <div className=" flex justify-center">
            <div className="max-w-md w-[20rem] py-6 px-8 rounded-2xl bg-gray-400 opacity-30%">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
