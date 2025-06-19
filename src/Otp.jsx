import { useRef } from "react";

export const Otp = () => {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const ref6 = useRef();
  return (
    <div className={"w-full h-screen flex justify-center items-center"}>
      <InputBox
        refer={ref1}
        onDone={() => {
          ref2.current.focus();
        }}
        unDone={() => {
          ref1.current.focus();
        }}
      />
      <InputBox
        refer={ref2}
        onDone={() => {
          ref3.current.focus();
        }}
        unDone={() => {
          ref1.current.focus();
        }}
      />
      <InputBox
        refer={ref3}
        onDone={() => {
          ref4.current.focus();
        }}
        unDone={() => {
          ref2.current.focus();
        }}
      />
      <InputBox
        refer={ref4}
        onDone={() => {
          ref5.current.focus();
        }}
        unDone={() => {
          ref3.current.focus();
        }}
      />
      <InputBox
        refer={ref5}
        onDone={() => {
          ref6.current.focus();
        }}
        unDone={() => {
          ref4.current.focus();
        }}
      />
      <InputBox
        refer={ref6}
        onDone={() => {
          ref6.current.focus();
        }}
        unDone={() => {
          ref5.current.focus();
        }}
      />
    </div>
  );
};

export function InputBox({ refer, onDone, unDone }) {
  return (
    <input
      ref={refer}
      className="rounded-sm outline-none text-black border w-6 m-1 text-center"
      onChange={(e) => {
        if (e.target.value !== "") onDone();
        else unDone();
      }}
    />
  );
}

export default Otp;
