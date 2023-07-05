import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Dosar from '../components/Dosar';
import React from 'react'

export default function Dosare() {
  return (
    <div>
        <Navbar />
        <div className="flex">
            <Sidebar />
            <Dosar 
                Titlu = {'Titlu Dosar'}
                Locatie = {'Locatie Dosar'}
                Sofer = {'Sofer'}
                Status= {'Status'}
            />
        </div>
    </div>
  )
}
