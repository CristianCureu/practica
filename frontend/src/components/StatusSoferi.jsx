import React from 'react'
import RowSoferi from './RowSoferi';

const StatusSoferi = ({
    Nr_taskuri,
    Nr_done,
    In_progress
}) => {
  return (
    <div>
        <div className="status_soferi flex flex-col w-12/12 gap-10 bg-lime-800 rounded-lg text-white p-6 mb-12">

            <div className="header-status-soferi flex justify-between">

                <div className="last-task flex flex-col">
                    <h2>Status Soferi</h2>
                    <p>{Nr_taskuri}, total</p>
                </div>

                <div className="done-progres flex gap-6">
                    <div className="done-container flex flex-col items-center">
                        <p>{Nr_done}</p>
                        <p>Done</p>
                    </div>
                    <div className="done-container flex flex-col items-center">
                        <p>{In_progress}</p>
                        <p>In progress</p>
                    </div>
                </div>

            </div>


            <div className="grid grid-cols-4">

                    <p>Dosar</p>
                    <p>Sofer</p>
                    <p>Locatii</p>
                    <p className='justify-self-end'>Status</p>

            </div>

            <div className="row-sofer">
                <RowSoferi Sofer="Gigel" Dosar="Dosarul 1" Locatii="Borsa, Sighet, Baia Mare" Status="In curs de livrare" />
            </div>

            <div className="row-sofer">
                <RowSoferi Sofer="Gigel" Dosar="Dosarul 1" Locatii="Borsa, Sighet, Baia Mare" Status="In curs de livrare" />
            </div>

            <div className="row-sofer">
                <RowSoferi Sofer="Marcel" Dosar="Dosarul 69" Locatii="Borsa, Sighet, Baia Mare" Status="In curs de livrare" />
            </div>

            <div className="row-sofer">
                <RowSoferi Sofer="Vasile" Dosar="Dosarul 90" Locatii="Borsa, Sighet, Baia Mare" Status="Livrare esuata" />
            </div>

            <div className="row-sofer">
                <RowSoferi Sofer="Viorel" Dosar="Dosarul 7" Locatii="Borsa, Sighet, Baia Mare" Status="Livrat" />
            </div>

            <div className="row-sofer">
                <RowSoferi Sofer="Rares" Dosar="Dosarul 14" Locatii="Borsa, Sighet, Baia Mare" Status="In curs de livrare" />
            </div>

            <div className="row-sofer">
                <RowSoferi Sofer="Bogdan" Dosar="Dosarul 2" Locatii="Borsa, Sighet, Baia Mare" Status="Livrare esuata" />
            </div>

            <div className="row-sofer">
                <RowSoferi Sofer="Viorel S" Dosar="Dosarul 5" Locatii="Borsa, Sighet, Baia Mare" Status="Livrat" />
            </div>

        </div>
    </div>
  )
}

export default StatusSoferi