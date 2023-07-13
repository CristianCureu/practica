import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Dosar from '../components/Dosar';
import Button from '../components/Button';
import React from 'react'

export default function Dosare() {
  return (
    <div>
        <Navbar />
        <div className="flex">
            <Sidebar />
            <div className="dosar mx-auto">
            <Dosar 
                Titlu = {'Dosarul 1'}
                Locatie = {'Borsa, Sighet, Vicea'}
                Sofer = {'Costel'}
                Status= {'Livrat'}
            />
            <Dosar 
                Titlu = {'Dosarul 1'}
                Locatie = {'Borsa, Sighet, Vicea'}
                Sofer = {'Costel'}
                Status= {'Livrat'}
            />
            <Dosar 
                Titlu = {'Dosarul 1'}
                Locatie = {'Borsa, Sighet, Vicea'}
                Sofer = {'Costel'}
                Status= {'Livrat'}
            />
            <Dosar 
                Titlu = {'Dosarul 1'}
                Locatie = {'Borsa, Sighet, Vicea'}
                Sofer = {'Costel'}
                Status= {'Livrat'}
            />
            <Dosar 
                Titlu = {'Dosarul 1'}
                Locatie = {'Borsa, Sighet, Vicea'}
                Sofer = {'Costel'}
                Status= {'Livrat'}
            />
            <Dosar 
                Titlu = {'Dosarul 1'}
                Locatie = {'Borsa, Sighet, Vicea'}
                Sofer = {'Costel'}
                Status= {'Livrat'}
            />
            
            </div>
        </div>
    </div>
  )
}
