import { useState } from "react";
import Button from "./Buttton";

const Screen = () => {
  const [disable, setDisable] = useState(false);
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
            onChange={() => setDisable(true)}
            className="border rounded-lg opacity-50 py-1 px-2 my-1 w-[80%] m-auto"
            placeholder="Enter birth year"
          />
          <Button disabled={disable}>Continue</Button>
        </div>
      </div>
    </div>
  );
};

export default Screen;
