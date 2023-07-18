import React from 'react'

const Filtre = () => {
  return (
    <div className='flex justify-between'>
        <label className='flex gap-4'>
            Status
            <select name="" id="" className='border-2'>
                <option value="">Livrat</option>
                <option value="">In curs de livrare</option>
                <option value="">Livrare esuata</option>
            </select>
        </label>

        <label className='flex gap-4'>
            Status
            <select name="" id="" className='border-2'>
                <option value="">Costel</option>
                <option value="">Marcel</option>
                <option value="">Gigel</option>
            </select>
        </label>

        <label htmlFor="" className='flex gap-4'>Search
            <input type="search" name="" id="" placeholder='Search bar'className='border-2'/>
        </label>
    </div>
  )
}

export default Filtre