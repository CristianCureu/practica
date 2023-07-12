const Button = ({
  text,
  onClick,
  bgColor = "bg-indigo-600",
  hoverBgColor = "hover:bg-indigo-500",
  color = "text-white",
}) => {
  return (
    <button
      className={`${bgColor} ${color} ${hoverBgColor} rounded-md py-2 px-4 uppercase transition duration-100 ease-in w-auto`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
