import React from 'react'

export default function Sidebar() {
  return (
    <div>
        <aside className='bg-gray-800 w-48 h-screen'>
            <ul className="text-white pt-6 pl-10 flex flex-col gap-6 ">
                <li><a href="/Dashboard" className='rounded-lg p-2 hover:bg-gray-700 '>Dashboard</a></li>
                <li><a href="/Dosare" className='rounded-lg p-2 hover:bg-gray-700 '>Dosare</a></li>
                <li><a href="/CreeazaDosare" className='rounded-lg p-2 hover:bg-gray-700 '>Creeaza Dosar</a></li>
            </ul>
        </aside>
    </div>
  )
}
