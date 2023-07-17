const Button = ({
  text,
  content,
  onClick,
  bgColor,
  hoverBgColor,
  color = "text-white",
}) => {
  return (
    <button
      className={`${bgColor} ${color} ${hoverBgColor} rounded-md py-2 px-4 uppercase transition duration-100 ease-in w-auto`}
      onClick={onClick}
    >
      {text}
      {content}
    </button>
  );
};

export default Button;
