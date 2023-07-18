import { useEffect, useState } from "react";
import Scanner from "../components/Scanner";
import { useNavigate, useParams } from "react-router-dom";
import EnqueueSnackBar, { VariantType } from "../components/UseSnackbar";

const ScanColetPage = () => {
  const [colete, setColete] = useState([]);
  const { idDosar } = useParams();
  const enqueueSnackBar = EnqueueSnackBar();
  const navigate = useNavigate();

  useEffect(() => {
    const getColetData = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/data/colet?idDosar=${idDosar}`
      );
      const [responseJson] = await response.json();
      if (!responseJson) {
        enqueueSnackBar(
          "Dosarul nu s-a gasit in Baza de Date !",
          VariantType.ERROR
        );
        return navigate("/");
      }

      console.log(responseJson);
      setColete(responseJson);
    };
    getColetData();
  }, []);

  return (
    <div className="w-full flex items-center flex-col p-6">
      <Scanner />
      <div className="mt-10 flex items-center">
        Numar colete scanate:{" "}
        <p className="mx-2 text-xl">
          {colete.filter((e) => e.ScanatIncarcare).length}
        </p>{" "}
        din <p className="mx-2 text-xl">{colete.length}</p>
      </div>
    </div>
  );
};

export default ScanColetPage;
