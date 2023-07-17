import { useState, useEffect} from "react";
import { useFetcher } from "react-router-dom";


const DosarPage = () => {
    const [dosar, setDosar]=useEffect([]);
    const {idDosar}=useEffect({});
   
    useEffect(()=>{
        //data- Dosar valid 
        const data = async () =>{
            try{
                const response = await fetch(`${process.env.REACT_APP_BASE_URL}`,);
                const responseJson= response.json();
            
            }
            catch(error){
                console.log(`getDosar::${error}`)
            }
        }
    },[])

    return <div></div>;

};

export default DosarPage;
