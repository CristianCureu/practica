import React from 'react'

const DosarSofer = ({
    Titlu,
    Locatie,
    Sofer,
    Status
}) => {
  return (
    <div className='flex justify-between border-2 p-4 mx-auto w-3/12 mt-12 mb-12'>
        <h2>Dosar</h2>
        <p><span>0</span>/<span>17</span></p>
    </div>
  )
}

export default DosarSofer