const LoginForm = () => {
  const handleLogin = async () => {};
  return (
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
          className="mx-auto w-20 py-1 px-4 !bg-blue-500 my-3 cursor-pointer text-white rounded-md"
        >
          ENTER
        </button>
        <p className="text-white text-sm">sales[at]vegas-x.net</p>

        <p className="text-white text-sm mt-5">Forgot password?</p>
      </div>
    </form>
  );
};

export default LoginForm;
