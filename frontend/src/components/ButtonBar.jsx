import { useEffect } from "react";
import Button from "./Button";
const ButtonBar = ({
    buttonList=[<Button bgColor="bg-green-600"/>,<Button bgColor="bg-red-600"/>], //de Test
    bgColor = "",
  }) => {

    return (
      <div
        className={`${bgColor}`}
      >
        {buttonList.map( elem=>(
            elem
        ))}
      </div>
    );
  };
  
  export default ButtonBar;
  