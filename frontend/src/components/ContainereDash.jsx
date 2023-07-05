import React from 'react'

export default function ContainereDash({
    Titlu,
    Text_Total,
    Text_Saptamanal,
    Text_Zilnic,
    Nr_Total,
    Nr_Saptamanal,
    Nr_Zilnic
}) {
  return (
    <div className='bg-lime-800 rounded-lg text-white h-64'>
        <h2 className='text-center text-2xl mt-4 border-slate-600'>{Titlu}</h2>
        <div className="container-dosare flex  h-56 justify-around items-center w-96">
        <div className="texte-dash text-base">
        <p >{Text_Total}</p>
        <p className='mt-5'>{Text_Saptamanal}</p>
        <p className='mt-5'>{Text_Zilnic}</p>
        </div>
        <div className="numere-dash text-base">
        <p>{Nr_Total}</p>
        <p className='mt-5'>{Nr_Saptamanal}</p>
        <p className='mt-5'>{Nr_Zilnic}</p></div></div>
    </div>
  )
}
