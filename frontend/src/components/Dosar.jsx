import React from 'react'

export default function Dosar({
    Titlu,
    Locatie,
    Sofer,
    Status
}) {
    
  return (
    <div>
        <div className="left-container">
            <p>{Titlu}</p>
            <p>{Locatie}</p>
            <p>{Sofer}</p>
        </div>
        <div className="center-container">
            <p>{Status}</p>
        </div>
        
    </div>
  )
}
