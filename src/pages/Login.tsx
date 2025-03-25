const Login = () => {
  const handleLogin = async () => {
    
  };
  return (
    <div
      className="flex flex-col min-h-screen"
      style={{
        backgroundImage: 'url("src/assets/vegas-x2.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        position: "relative",
      }}
    >
      <div className="flex flex-col lg:flex-row flex-1 px-[5rem] lg:px-[15rem] py-12 lg:py-16 space-y-8 lg:space-y-0 lg:space-x-10 z-10">
        <div className="w-full lg:w-1/2 lg:ms-20">
          <img
            src="src/assets/vegas-logo.png"
            alt="logo"
            className="w-[25rem]"
          />
        </div>

        <div className="w-full lg:w-1/2">
          <div className=" flex justify-center">
            <div className="max-w-md w-[20rem] py-6 px-8 rounded-2xl bg-gray-400 opacity-30%">
              <form onSubmit={handleLogin}>
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="USERNAME..."
                    className="w-full px-2 py-1 bg-white text-sm border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div className="relative">
                  <input
                    placeholder="PASSWORD..."
                    className="w-full px-2 py-1 bg-white text-sm border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div className="mt-1 mb-4 flex flex-col justify-center text-center">
                  <span className="text-white text-xs mt-2">REMEMBER ME</span>
                  <button
                    type="submit"
                    className="mx-auto w-20 py-1 px-4 bg-blue-500 my-3 cursor-pointer text-white rounded-md"
                  >
                    ENTER
                  </button>
                  <p className="text-white text-sm">sales[at]vegas-x.net</p>

                  <p className="text-white text-sm mt-5">Forgot password?</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
