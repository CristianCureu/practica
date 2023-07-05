import Button from "./Button";
import React from 'react'

export default function FormCont() {

  return (
    <div>
        <div className="flex flex-col items-center mt-14">
        <form className="rounded-md flex flex-col p-4 border w-2/6" id="form">
         <h2 className="text-xl font-bold mb-4 text-center">Creeaza Cont</h2>
         
         <label htmlFor="">Nume</label>
            <input type="text" placeholder="Email" className="border-gray-400 border-2 text-gray-900 outline-none text-sm rounded-md w-2/4 p-3 mb-6 mt-2 focus:border-sky-500 w-full"  required/>


            <label htmlFor="">Email</label>
            <input type="email" placeholder="Email" className="border-gray-400 border-2 text-gray-900 outline-none text-sm rounded-md w-2/4 p-3 mb-6 mt-2 focus:border-sky-500 w-full"  required/>

            <label htmlFor="">Password</label>
            <input type="password" placeholder="Password" className="border-gray-400 border-2 text-gray-900 outline-none text-sm rounded-md w-2/4 p-3 mb-6 mt-2 focus:border-sky-500 w-full" required/>
            
            <label htmlFor="">Password Check</label>
            <input type="password" placeholder="Password" className="border-gray-400 border-2 text-gray-900 outline-none text-sm rounded-md w-2/4 p-3 mb-6 mt-2 focus:border-sky-500 w-full" required/>


            <Button text="Creeaza cont"/>

        </form>
    </div>
        
    </div>
  )
}
