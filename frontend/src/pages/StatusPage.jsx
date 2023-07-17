// import { stringify } from "json5";
<<<<<<< HEAD
import React from 'react';
import { createRoot } from 'react-dom/client';
import { useEffect, useState } from "react";
import ButtonBar from "../components/ButtonBar";
const StatusPage = () => {

  const [statuses, setStatus] = useState([]);
  useEffect(() => {
    const getStatuses = async () => {
      try {
        const users= await fetch(process.env.REACT_APP_BASE_URL+"/data/status",{
=======
import { useEffect, useState } from "react";
import Button from "../components/Button";
import { Navigate, useNavigate } from "react-router-dom";
const StatusPage = () => {
  const [statuses, setStatuses] = useState([]);
  const sample = {Id:"",nume:"", TipStatus:"", StatusDesign:""};
  const navigate = useNavigate();
  useEffect(() => {
    const getStatuses = async () => {
      try {
        const statuses = await fetch(`http://localhost:80/api/data/status`, {
>>>>>>> main
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
<<<<<<< HEAD
          
        });
        const dataJson = await users.json();
        setStatus(dataJson);
        setTableHead(Object.values(dataJson)[1][0]);
        setTableBody(Object.values(dataJson)[1])
 
       // console.log(dataJson)
      //  tableHead(JSON.stringify(Object.values(dataJson)));

      } catch (error) {
        console.log("Users::getStatuses::", error);
      }
    };
    getStatuses();
           
  }, []);

 
    const setTableHead = (sample)=>{
      let head = document.querySelector("thead");
      var headRow = document.createElement("tr");
      const colNames=Object.keys(sample);
      // console.log(sample);
      //console.log(colNames);

      colNames.forEach(col => {
        let td=document.createElement("th");
        td.className="font-medium text-blue-600  dark:text-blue-500 hover:underline px-6 py-3";
        td.innerText=col;
        td.scope="col";
        headRow.appendChild(td);
        
      //  console.log(headRow);
    });
    
    let lastTd=document.createElement("th");
    lastTd.className="font-medium text-blue-600  dark:text-blue-500 hover:underline px-6 py-3";
    lastTd.scope="col";
    headRow.appendChild(lastTd);

    head.appendChild(headRow);
    
  }


  const editStatus = async (stat) =>{

  }

  const deleteStatus = async (stat) =>{
    
  }



  const setTableBody = (records)=>{
    var body = document.querySelector("tbody");
    //console.log(records)
    records.forEach(record => {      
      let row= document.createElement("tr")
      row.scope="col";
      row.className="px-6 py-4 font-medium";
      body.appendChild(row);


      Object.keys(record).forEach(key => {
        let td=document.createElement("td");
        td.className="px-6 py-4";
        if(key==="Id")
          row.id=record[key];

        td.innerText=record[key];
        row.appendChild(td)
      });

      let td=document.createElement("td");
      td.className="px-6 py-4"
      const buttonBarElement = React.createElement(ButtonBar);
      createRoot(td).render(buttonBarElement);
      row.appendChild(td)
      console.log(ButtonBar);
    
    });
    //console.log(body);
    //console.log("XXXXXXXX");
    
  }


  return (
   
<div className=" relative overflow-y-auto overflow-x-auto shadow-md sm:rounded-lg mx-auto w-fit">
    <table className="text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        
        </thead>
        <tbody>
          
        </tbody>
    </table>
</div>

  );

};

export default StatusPage;
=======
        });
        const statusesJson = await statuses.json();
        setStatuses(statusesJson);

        console.log({ statusesJson });
      } catch (error) {
        console.log("Users::setStatuses::", error);
      }
    };
    getStatuses();
  }, []);

  const deleteRow = async (id) => {
    try {
      const statuses = await fetch(
        `http://localhost:80/api/data/status?id=${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const statusesJson = await statuses.json();
      setStatuses(statusesJson);
      console.log({ statusesJson });
    } catch (error) {
      console.log("Users::setStatuses::", error);
    }
  };

  const addRow = async () => {
    try {
      const table = document.querySelector("tbody");
      const newRow = document.createElement("tr");
      newRow.className = "border-b border-gray-200 hover:bg-gray-100";

      let keys=Object.keys(sample);
      //alert(keys)
      keys.forEach(key => {
        let field;
        if(key==='TipStatus'){
        field = document.createElement("select");
        field.selected="Selecteaza tip"
        field.className =
        "border border-gray-300 rounded px-2 py-1 bg-gray-100";
        field.name = "tipStatus";

        const placeholder = document.createElement("option");
        placeholder.value = "palceholder";
        placeholder.name = key;
        placeholder.textContent = "Selecteaza tip";
        placeholder.disabled=true;
        placeholder.selected=true;
        placeholder.hidden=true;
        field.appendChild(placeholder);

        const option1 = document.createElement("option");
        option1.value = "colet";
        option1.textContent = "COLET";
        field.appendChild(option1);

        const option2 = document.createElement("option");
        option2.value = "factura";
        option2.textContent = "FACTURA";
        field.appendChild(option2);  
        newRow.appendChild(createCell(field));
        return;
        }
        
        field = document.createElement("input");
        field.name = key;
        field.className = "border border-gray-300 rounded px-2 py-1 bg-gray-100";        
        if(key==='Id'){
          field.className="";
          field.type = "text";
          field.readOnly= true;
          field.placeholder="ID: autogenerated"
          field.disabled=true;
        }
        
        field.name = key;
        newRow.appendChild(createCell(field));
      });
    
      const buttonCell = document.createElement("td");
      const actionButton = document.createElement("button");
      actionButton.type = "button";
      actionButton.className =
        "text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800";
      actionButton.innerHTML = String.fromCharCode(43);
      actionButton.addEventListener("click", add_status_to_db);
      buttonCell.appendChild(actionButton);
      newRow.appendChild(buttonCell);
      table.appendChild(newRow);
   
    } catch (error) {
      console.log(error);
    }
  };

  function createCell(content) {
    const cell = document.createElement("td");
    cell.className = "py-3 px-6 text-left";
    cell.appendChild(content);
    return cell;
  }

  function add_status_to_db() {
    const numeInput = document.querySelector('input[name="nume"]');
    const tipStatusInput = document.querySelector('select[name="tipStatus"]');
    //alert(tipStatusInput)
    const statusDesignInput = document.querySelector(
      'input[name="StatusDesign"]'
    );
    //alert(JSON.stringify(numeInput));
    const statusData = {
      nume: numeInput.value,
      tipStatus: tipStatusInput.value,
      statusDesign: statusDesignInput.value,
    };
    add_query(statusData)
      .then((response) => {
        console.log("Status added successfully:", response);
        window.location.reload();
      })
      .catch((error) => {
        console.log("Error adding status:", error);
      });
  }

  async function add_query(statusData) {
    try {
      const response = await fetch("http://localhost:80/api/data/status", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(statusData),
      });

      if (!response.ok) {
        throw new Error("Failed to update status in the database.");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(
        `Error updating status in the database: ${error.message}`
      );
    }
  }

  const editThis = async (rowId) => {
  };

  return (
    <div className="overflow-x-auto flex flex-col items-center space-y-10 ">
      <table className="min-w-max w-full table-auto">
        <thead>
          <tr className="bg-gray-300 text-gray-600 uppercase text-sm leading-normal">
            {(Object.keys(sample).map((key)=>(
                  <th className="py-3 px-6 text-left">{key}</th>
            )))}
            <th className="py-3 px-6 text-left"></th>
            </tr>
        </thead>

        <tbody className="text-sm font-light">
          {statuses.map((status, index) => (
            <tr
              className="border-b border-gray-200 hover:bg-gray-100"
              key={status.Id}
              id={status.Id}  
            >
              {Object.keys(status).map((key)=>(
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  {status[key]}
                  </td>
              ))}
            
              <td className="flex flex-row py-3 px-3 text-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  //onClick={()=>editThis(status.Id)}
                  onClick={()=>navigate(`/updatestatus/${status.Id}`)}
                 version="1.0"
                    width="24.000000pt" height="24.000000pt" 
                    viewBox="0 0 32.000000 32.000000" preserveAspectRatio="xMidYMid meet">
                  <metadata>
                  Created by potrace 1.16, written by Peter Selinger 2001-2019
                  </metadata>
                  <g className="hover:fill-green-600" transform="translate(0.000000,32.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                  <path d="M170 244 c-58 -56 -83 -89 -95 -122 -8 -25 -11 -50 -7 -54 4 -4 29 -1 54 7 33 12 66 37 122 95 69 70 77 83 74 112 -3 29 -7 33 -36 36 -29 3 -42 -5 -112 -74z"/>
                  <path d="M4 287 c-2 -7 -3 -74 -2 -148 l3 -134 135 0 135 0 3 78 c2 64 0 77 -13 77 -12 0 -15 -13 -15 -65 l0 -65 -110 0 -110 0 0 120 0 119 77 3 c50 2 78 7 81 16 6 18 -177 17 -184 -1z"/>
                  </g>
                  </svg>
                <svg 
                  onClick={()=>deleteRow(status.Id)}
                  xmlns="http://www.w3.org/2000/svg" 
                  version="1.0" 
                  width="24.000000pt"  height="24.000000pt" 
                  viewBox="0 0 32.000000 32.000000" 
                  preserveAspectRatio="xMidYMid meet">
                    <g className="hover:fill-red-600" transform="translate(0.000000,32.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="#000000" >
                    <path d="M105 310 c-3 -5 -19 -10 -36 -10 -19 0 -29 -5 -29 -15 0 -12 20 -15 120 -15 100 0 120 3 120 15 0 10 -10 15 -29 15 -17 0 -33 5 -36 10 -3 6 -28 10 -55 10 -27 0 -52 -4 -55 -10z"/>
                    <path d="M50 144 c0 -144 0 -144 110 -144 110 0 110 0 110 144 l0 106 -110 0 -110 0 0 -106z"/>
                    </g>
                </svg>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Button
        id="addStatusButton"
        onClick={() => addRow()}
        type="button"
        content={
          <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="45.000000pt" height="45.000000pt" 
            viewBox="0 0 64.000000 64.000000"
            preserveAspectRatio="xMidYMid meet">
            <metadata>
            Created by potrace 1.10, written by Peter Selinger 2001-2011
            </metadata>
            <g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
            fill="#000000" stroke="none">
            <path d="M185 611 c-44 -16 -102 -37 -130 -48 l-50 -19 -3 -165 c-2 -126 1
            -169 10 -176 7 -5 60 -26 117 -47 72 -27 106 -35 114 -27 11 11 10 12 -130 63
            l-82 30 -3 144 c-2 92 1 144 7 144 6 -1 55 -18 110 -39 l100 -38 5 -68 c7 -96
            28 -99 32 -5 l3 72 105 39 c58 21 109 39 113 39 5 0 7 -24 6 -52 -2 -39 1 -53
            10 -53 10 0 13 19 13 69 l0 70 -128 47 c-71 27 -131 48 -134 48 -3 1 -41 -12
            -85 -28z m193 -40 l103 -38 -99 -36 c-55 -21 -105 -37 -113 -37 -16 0 -191 60
            -202 70 -7 6 172 78 198 79 6 0 56 -17 113 -38z"/>
            <path d="M419 340 c-97 -29 -150 -133 -114 -225 30 -79 112 -124 199 -109 57
            9 121 73 130 130 22 132 -93 241 -215 204z m111 -38 c19 -9 45 -33 58 -52 20
            -29 23 -44 20 -88 -4 -45 -10 -59 -41 -89 -30 -31 -44 -37 -89 -41 -44 -3 -59
            0 -88 20 -151 101 -22 332 140 250z"/>
            <path d="M457 263 c-4 -3 -7 -21 -7 -39 0 -31 -3 -33 -37 -36 -52 -4 -56 -28
            -4 -28 l41 0 0 -40 c0 -29 4 -40 15 -40 11 0 15 11 15 40 0 40 0 40 40 40 29
            0 40 4 40 15 0 11 -11 15 -40 15 -40 0 -40 0 -40 40 0 38 -8 49 -23 33z"/>
            </g>
            </svg>
        }
      >
      </Button>
     
    </div>
  );
};

export default StatusPage;
>>>>>>> main
