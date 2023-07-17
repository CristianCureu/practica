import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { useState} from "react";
import Input from "../components/Input";
import React from "react"
import { useState, useEffect} from "react";


const DosarPage = () => {
 

    useEffect(()=>{
        //data- Dosar valid 
        const data = async () =>{
            try{
                const response = await fetch(,);
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
