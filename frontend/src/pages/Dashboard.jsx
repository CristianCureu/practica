import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import ContainereDash from '../components/ContainereDash';
import React from 'react'

const Dashboard = () => {
  return (
    <div>
        <Navbar />
        <div className="flex">
            <Sidebar />
            <div className="flex items-center justify-around containere-dashboard flex w-full">
            <ContainereDash 
                Titlu={'Dosare'}
                Text_Zilnic="Dosare facute astazi" 
                Text_Total="Toate dosarele facute in total" 
                Text_Saptamanal={"Dosare facute saptamana aceasta"}
                Nr_Total={"300"}
                Nr_Saptamanal={"50"}
                Nr_Zilnic={"10"}/>
                <ContainereDash
                Titlu={'Colete'} 
                Text_Zilnic="Colete livrate astazi" 
                Text_Total="Toate coletele livrate in total" 
                Text_Saptamanal={"Colete livrate saptaman aceasta"}
                Nr_Total={"300"}
                Nr_Saptamanal={"50"}
                Nr_Zilnic={"10"}/>
            </div>
        </div>
    </div>
  )
}

export default Dashboard