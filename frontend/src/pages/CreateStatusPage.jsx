import React, { useState } from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import EnqueueSnackBar, { VariantType } from "../components/UseSnackbar";

const CreateStatusPage = () => {
  const [statusData, setStatusData] = useState({
    nume: "",
    tipStatus: "",
    statusDesign: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const enqueueSnackBar = EnqueueSnackBar();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const response = await fetch( `$/api/data/status', {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/data/status`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(statusData),
        }
      );

      if (response.ok) {
        console.log("Status added successfully");
        enqueueSnackBar("Status added successfully", VariantType.SUCCESS);
        // Redirecționează utilizatorul către pagina de home
        navigate("/status");
      } else {
        const errorMessage = await response.text();
        setError(errorMessage);
      }
    } catch (error) {
      console.log("Error while adding status:", error.message);
    }
  };

  return (
    <div className="flex w-full justify-center p-4">
      <form className="flex flex-col items-center justify-around border-gray-200 border-2 rounded-md w-3/4 lg:w-2/4 h-96">
        <input
          className="lg:w-3/4 border-gray-400 border-2 text-gray-900 outline-none text-sm rounded-md p-3 focus:border-sky-500"
          type="text"
          placeholder="Nume"
          required
          autoComplete="off"
          value={statusData.nume}
          onChange={(e) =>
            setStatusData((prevState) => ({
              ...prevState,
              nume: e.target.value,
            }))
          }
        />
        <input
          className="lg:w-3/4 border-gray-400 border-2 text-gray-900 outline-none text-sm rounded-md p-3 focus:border-sky-500"
          type="text"
          placeholder="Tip Status"
          required
          autoComplete="off"
          value={statusData.tipStatus}
          onChange={(e) =>
            setStatusData((prevState) => ({
              ...prevState,
              tipStatus: e.target.value,
            }))
          }
        />
        <input
          className="lg:w-3/4 border-gray-400 border-2 text-gray-900 outline-none text-sm rounded-md p-3 focus:border-sky-500"
          type="text"
          placeholder="Design Status"
          required
          autoComplete="off"
          value={statusData.statusDesign}
          onChange={(e) =>
            setStatusData((prevState) => ({
              ...prevState,
              statusDesign: e.target.value,
            }))
          }
        />
        <Button text="Create Status" onClick={handleSubmit} />
        {error && <div className="text-red-600">{error}</div>}
      </form>
    </div>
  );
};

export default CreateStatusPage;
