import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Dosar from '../components/Dosar';
import Button from '../components/Button';
import React from 'react'
import Filtre from '../components/Filtre';

export default function Dosare() {
  return (
    <div>
        <Navbar />
        <div className="flex">
            <Sidebar />
            <div className="flex flex-col mx-auto mt-12">
                <div className="filtre">
                    <Filtre />
                </div>
                <div className="dosar mx-auto mt-12">
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
    </div>
  )
}
