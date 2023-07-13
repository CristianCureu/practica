import CreeazaD from '../components/CreeazaD';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import React from 'react'



export default function CreeazaDosare() {
  return (
    <div>
        <Navbar />
        <div className="flex mx-auto">
        <Sidebar />
        <CreeazaD />
        </div>
    </div>
  )
}
