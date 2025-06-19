const Button = ({ disabled, children }) => {
  return (
    <div
      className={`rounded-lg py-1 px-2 my-4 w-[80%] m-auto pointer ${
        disabled ? "bg-[#6fc1d4]" : "bg-gray-400"
      }`}
    >
      {children}
    </div>
  );
};
export default Button;
