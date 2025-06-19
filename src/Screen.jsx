const Screen = () => {
  return (
    <div className="w-full h-screen bg-[#063560] flex flex-col justify-center items-center text-white ">
      <div className="max-w-sm text-center">
        <div className="my-10 text-2xl">
          <span className="text-cyan-500 ">Webinar</span>
          <span>.gg</span>
        </div>
        <div className="text-xl my-10">
          <div className="font-bold">Verify Your Age</div>
        </div>
        <p>Please confirm your birth year. This will not be stored</p>
        <div className="flex flex-col w-full">
          <input
            className="border rounded-lg opacity-50 py-1 px-2 my-1 w-[80%] m-auto"
            placeholder="Enter birth year"
          />
          <button className="bg-gray-400 rounded-lg py-1 px-2 my-4 w-[80%] m-auto">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Screen;
