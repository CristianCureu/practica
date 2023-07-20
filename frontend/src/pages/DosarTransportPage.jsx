import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import ButtonDelete from "../components/ButtonDelete";
import BasicModal from "../components/modal/Modal";
import Modal from "../components/modal/Modal";

const DosarTransportPage = () => {
  const [dosare, setDosare] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const clickHandler = () => setIsModalOpen(true);
  const modalCloseHandler = () => setIsModalOpen(false);

  useEffect(() => {
    const getDosare = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BASE_URL}/data/dosartransport`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const dosareJson = await response.json();
        setDosare(dosareJson);

        console.log({ dosareJson });
      } catch (error) {
        console.log("DosarTransportPage::setDosare::", error);
      }
    };

    getDosare();
  }, []);

  const deleteDosar = async (id) => {
    try {
      await fetch(
        `${process.env.REACT_APP_BASE_URL}/data/dosartransport?id=${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const updatedDosare = dosare.filter((dosar) => dosar.Id !== id);
      setDosare(updatedDosare);
    } catch (error) {
      console.log("DosarTransportPage::deleteDosar::", error);
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredDosare = dosare.filter((dosar) =>
    dosar.Nume.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-7xl">
        <div className="overflow-x-auto">
          <div className="flex justify-between mb-4">
            <input
              type="text"
              placeholder="Caută după nume"
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              value={searchTerm}
              onChange={handleSearch}
            />
            <Link
              to="/createdosar"
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300"
            >
              Crează
            </Link>
          </div>
          <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-4 px-6 text-left text-gray-700 font-bold">
                  Id
                </th>
                <th className="py-4 px-6 text-left text-gray-700 font-bold">
                  #
                </th>
                <th className="py-4 px-6 text-left text-gray-700 font-bold">
                  Nume
                </th>
                <th className="py-4 px-6 text-left text-gray-700 font-bold">
                  Descriere
                </th>
                <th className="py-4 px-6 text-left text-gray-700 font-bold">
                  Sofer
                </th>

                <th className="py-4 px-6 text-left text-gray-700 font-bold"></th>
              </tr>
            </thead>
            <tbody>
              {filteredDosare.map((dosar, index) => (
                <tr
                  key={dosar.Id}
                  className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
                >
                  <td>
                    <div className="flex items-center">
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900">
                          {dosar.Id}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap w-12">
                    <Link to={`/scan/dosar/${dosar.Id}/scan-colet`}>
                      <img src={require("./../assets/scan-icon.png")} />
                    </Link>
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap">{dosar.Nume}</td>
                  <td className="py-4 px-6 whitespace-nowrap">
                    {dosar.Descriere}
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap">{dosar.Sofer}</td>
                  <td className="py-4 px-6 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <ButtonDelete
                        onClick={clickHandler}
                        text="Șterge"
                        className="px-4 py-2 bg-red-500 text-white
                        rounded hover:bg-red-600 focus:outline-none focus:ring
                        focus:ring-red-300"
                      />

                      <Modal isOpen={isModalOpen} close={modalCloseHandler}>
                        Esti sigur ca doresti sa stergi acest dosar?
                        <div className="flex justify-center space-x-4 mt-4">
                          <ButtonDelete
                            onClick={() => {
                              deleteDosar(dosar.Id);
                              modalCloseHandler();
                            }}
                            text="Da"
                            className="px-4 py-2 bg-red-500 text-white
                          rounded hover:bg-red-600 focus:outline-none focus:ring
                          focus:ring-red-300"
                          />
                          <Button
                            onClick={() => modalCloseHandler()}
                            text="Nu"
                            className="px-4 py-2 bg-blue-500 text-white
                          rounded hover:bg-blue-600 focus:outline-none focus:ring
                          focus:ring-red-300"
                          />
                        </div>
                      </Modal>

                      <Link
                        to={`/updatedosar/${dosar.Id}`}
                        className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 focus:outline-none focus:ring focus:ring-yellow-300"
                      >
                        Editează
                      </Link>

                      <Link
                        to={`/detaliidosar/${dosar.Id}`}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-yellow-300"
                      >
                        Detalii
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DosarTransportPage;
