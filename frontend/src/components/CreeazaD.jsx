import React from 'react'
import Button from './Button'
import { Select, Option } from "@material-tailwind/react";

const CreeazaD = () => {
  return (
    <div className='flex flex-col gap-4 w-4/12 ml-44 mt-12 mb-12'>
        <div className="nume-dosar">
            <label htmlFor="" className='flex flex-col gap-2'>Nume dosar
            <input type="text" className='border-gray-400 border-2 text-gray-900 outline-none text-sm rounded-md p-3 mb-6 focus:border-sky-500'></input>
            </label>
        </div>

        <div className="paletare">
            <label htmlFor="" className='flex flex-col gap-2'>Paletare
            <input type="text" className='border-gray-400 border-2 text-gray-900 outline-none text-sm rounded-md p-3 mb-6 focus:border-sky-500'></input>
            </label>
        </div>

        <div> 
            <label htmlFor="" className='flex flex-col gap-2'>Soferi
            <select name="" id="" className='border-gray-400 border-2 text-gray-900 outline-none text-sm rounded-md p-3 mb-6 focus:border-sky-500'>
                <option value="">Vasile</option>
                <option value="">Costel</option>
                <option value="">Marcel</option>
                <option value="">Gigel</option>
            </select>
            </label>
        </div>

        <div className="produse">
            <label htmlFor="" className='flex flex-col gap-2'>Produse
            <select name="" id="" className='border-gray-400 border-2 text-gray-900 outline-none text-sm rounded-md p-3 mb-6 focus:border-sky-500'>
                <option value="">Codu de bare a produsului</option>
                <option value="">Codu de bare a produsului</option>
                <option value="">Codu de bare a produsului</option>
                <option value="">Codu de bare a produsului</option>
            </select>
            </label>
        </div>
        <div className="locatii w-6/12">
            <label htmlFor="" className='flex flex-col gap-2'>Locatii
            <select name="" id="" className='border-gray-400 border-2 text-gray-900 outline-none text-sm rounded-md p-3 mb-6 focus:border-sky-500'>
                <option value="">Borsa</option>
                <option value="">Sighet</option>
                <option value="">Baia Mare</option>
                <option value="">Cluj</option>
            </select>
            </label>
        </div>

        <div className="adrese border-2" >
            <textarea name="" id="" className='' placeholder='Adresele unde trebuie livrate coletele'></textarea>
        </div>

        <div className="programare">
            <label htmlFor="" className='flex flex-col gap-2 '>Programare
            <select name="" id="" className='border-2 border-gray-400 border-2 text-gray-900 outline-none text-sm rounded-md p-3 mb-6 focus:border-sky-500'>
                <option value="">Colete care trebuie sa fie livrate astazi</option>
                <option value="">Colet care trebuie sa fie livrat maine</option>
            </select>
            </label>
        </div>

        <div className="buton-crez">
            <Button text="Creeaza dosar"/>
        </div>
    </div>
  )
}

export default CreeazaD