const Button = ({
  text,
  content,
  onClick,
  bgColor,
  hoverBgColor,
  disabled=false,
  color = "text-white",
}) => {
  return (
    <button
      className={`${bgColor} ${color} ${hoverBgColor} rounded-md py-2 px-4 uppercase transition duration-100 ease-in w-auto`}
      onClick={onClick}
      disabled={disabled}
      hidden={disabled}
    >
      {text}
      {content}
    </button>
  );
};

export default Button;
