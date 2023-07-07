const Input = ({
     className="",
      type="text",
      name="",
      placeholder="",
      required =true,
      autoComplete="off",
      onChange}) => {
    
    return (
       <input 
       className={className}
       type={type}
       name={name}
       required ={required}
       autoComplete={autoComplete}
       placeholder={placeholder} 
       onChange = {e => onChange(e.target.name,e.target.value)}
       />
    );

  };
  
  export default Input;
  