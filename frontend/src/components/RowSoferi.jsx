import React from 'react'

const RowSoferi = ({
    Sofer,
    Dosar,
    Locatii,
    Status
}) => {
  return (
    <div className='grid grid-cols-4'>
        <p>{Sofer}</p>
        <p>{Dosar}</p>
        <p>{Locatii}</p>
        <p className='justify-self-end'>{Status}</p>
    </div>
  )
}

export default RowSoferi