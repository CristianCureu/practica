<<<<<<< HEAD
const Input = ({
  name,
  type = "text",
  placeholder,
  required = true,
  autoComplete = "off",
  onChange,
}) => {
  return (
    <input
      className="border-gray-400 border-2 text-gray-900 outline-none text-sm rounded-md p-3 focus:border-sky-500"
      name={name}
      type={type}
      placeholder={placeholder}
      required={required}
      autoComplete={autoComplete}
      onChange={onChange}
    />
  );
};

export default Input;
=======


const Input = (props) =>{
   
return
<div>{props.name}</div> 

}

export default Input
>>>>>>> e8522ba2a04de4f6d2f20c0964cd7ed6221fc51d
