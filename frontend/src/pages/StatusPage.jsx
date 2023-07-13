// import { stringify } from "json5";
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
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          
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