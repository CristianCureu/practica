const Button = ({
  text,
  content,
  onClick,
<<<<<<< HEAD
  bgColor = "bg-sky-600",
  hoverBgColor = "hover:bg-red-700",
  color = "text-white"
=======
  bgColor,
  hoverBgColor,
  color = "text-white",
>>>>>>> main
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
