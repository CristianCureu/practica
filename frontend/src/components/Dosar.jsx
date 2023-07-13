import React from 'react'
import Button from './Button';

export default function Dosar({
    Titlu,
    Locatie,
    Sofer,
    Status
}) {
    
  return (
    <div className='grid grid-cols-3 items-center justify-space-between  border-2 p-6 mt-6'>
        <div className="left-container">
            <p>{Titlu}</p>
            <p>{Locatie}</p>
            <p>{Sofer}</p>
        </div>
        <div className="center-container">
            <p>{Status}</p>
        </div>
      <div className="butoane flex gap-2">
        <div className="but-1">
          <Button text="Editeaza" />
        </div>
        <div className="but-1">
        <Button text="Vizualizeaza" bgColor="bg-green-600" hoverBgColor="hover:bg-green-700" />
        </div>
        <div className="but-1">
        <Button text="Sterge" bgColor="bg-red-600" hoverBgColor="hover:bg-red-700"/>
        </div>
      </div>
    </div>
  )
}
