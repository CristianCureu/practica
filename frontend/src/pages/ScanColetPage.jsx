import { useEffect, useState } from "react";
import Scanner from "../components/Scanner";
import { useParams } from "react-router-dom";

const ScanColetPage = () => {
  const [colete, setColete] = useState([]);
  const { idDosar } = useParams();

  useEffect(() => {
    const getColetData = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/data/colet?idDosar=${idDosar}`
      );
      const responseJson = await response.json();
      console.log(responseJson);
      setColete(responseJson);
    };
    getColetData();
  }, []);
  useEffect(() => {
    const getColetData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/data/colet?idDosar=${idDosar}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const setColetData = await response.json();
        if (!colete) {
          
        console.log(colete);
        setColete(colete);
      }} catch (error) {
        console.log("Error while fetching colet data:", error.message);
      }
    };

    getColetData();
  } , []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch(
            `${process.env.REACT_APP_BASE_URL}/data/colet?idDosar=${idDosar}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            }
        );
        const resposneText = await response.text();
        console.log(response);
        if (response.status === 201) {
            console.log("success");
        } else {
            setError(resposneText);
        }
    } catch (error) {
        console.log("ColetePage::handleSubmit::", error.message);
    }
};

  return (
    <div className="w-full flex items-center flex-col p-6">
      <Scanner>
      handleResult={setColete}
      </Scanner>
      <div className="mt-10 flex items-center">
        Numar colete scanate: <p className="mx-2 text-xl">{colete.filter(e=>e.ScanatIncarcare).length}</p> din{" "}
        <p className="mx-2 text-xl">{colete.length}</p>
      </div>
    </div>
  );
};

export default ScanColetPage;
