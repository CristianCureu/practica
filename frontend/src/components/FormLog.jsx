import Button from "./Button";
import React from 'react'

function FormLog() {
  return (
    <div className="flex flex-col items-center mt-14">
        <form className="rounded-md flex flex-col p-4 border w-2/6">
         <h2 className="text-xl font-bold mb-4 text-center">Logheaza-te</h2>


            <label htmlFor="">Email</label>
            <input type="email" placeholder="Email" className="border-gray-400 border-2 text-gray-900 outline-none text-sm rounded-md w-2/4 p-3 mb-6 mt-2 focus:border-sky-500 w-full"  required/>

            <label htmlFor="">Password</label>
            <input type="password" placeholder="Password" className="border-gray-400 border-2 text-gray-900 outline-none text-sm rounded-md w-2/4 p-3 mb-6 mt-2 focus:border-sky-500 w-full" required/>


            <div className="flex justify-between mb-6">
                <div className="flex gap-4">
                    <div className="">
                        <input type="checkbox" name="" id="" />
                    </div>
                    <div className="">
                        Remember me
                    </div>
                </div>

                <div className="">
                    Ti-ai uitat parola?
                </div>
            </div>

            <Button text="Logheaza-te" />

            <div className="sing-in mt-6">
                <a href="/CreeazaCont" className="">Nu ai cont? <span className="text-cyan-400">Creeaza cont</span></a>
            </div>
        </form>
    </div>
  )
}

export default FormLog