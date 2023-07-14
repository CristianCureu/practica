import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";

const ColetePage = () => {
  const [colete, setColete] = useState([]);
  const [newColet, setNewColet] = useState({
    id: "",
    expeditor: "",
    destinatar: "",
    greutate: "",
    dimensiuni: "",
    stareLivrare: ""
  });

  const handleInputChange = (e) => {
    setNewColet({ ...newColet, [e.target.name]: e.target.value });
  };

  const handleAddColet = async () => {
    try {
      const response = await fetch("/api/data/colete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newColet)
      });
      if (response.ok) {
        
        console.log("Colet adăugat cu succes");
        // actualizare lista colete
        setColete([...colete, newColet]);
    
        setNewColet({
          id: "",
          expeditor: "",
          destinatar: "",
          greutate: "",
          dimensiuni: "",
          stareLivrare: ""
        });
      } else {
        console.log("Eroare la adăugarea coletului");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteColet = async (id) => {
    try {
      const response = await fetch(`/api/data/colete/${id}`, {
        method: "DELETE"
      });
      if (response.ok) {
        console.log("Colet șters cu succes");
        // actualizare
        const updatedColete = colete.filter((colet) => colet.id !== id);
        setColete(updatedColete);
      } else {
        console.log("Eroare la ștergerea coletului");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <div style={{ position: "sticky", top: 0, background: "white" }}>
        <h2 style={{ marginBottom: "20px" }}><strong>Adaugă un colet</strong></h2>
        <form style={{ display: "flex", gap: "10px" }}>
          <Input
            type="text"
            name="id"
            value={newColet.id}
            placeholder="ID"
            onChange={handleInputChange}
          />
          <Input
            type="text"
            name="expeditor"
            value={newColet.expeditor}
            placeholder="Expeditor"
            onChange={handleInputChange}
          />
          <Input
            type="text"
            name="destinatar"
            value={newColet.destinatar}
            placeholder="Destinatar"
            onChange={handleInputChange}
          />
          <Input
            type="text"
            name="greutate"
            value={newColet.greutate}
            placeholder="Greutate"
            onChange={handleInputChange}
          />
          <Input
            type="text"
            name="dimensiuni"
            value={newColet.dimensiuni}
            placeholder="Dimensiuni"
            onChange={handleInputChange}
          />
          <Input
            type="text"
            name="stareLivrare"
            value={newColet.stareLivrare}
            placeholder="Starea de livrare"
            onChange={handleInputChange}
          />
          <Button
            style={{
              backgroundColor: "purple",
              color: "white",
              borderRadius: "10px",
              padding: "5px 20px",
              cursor: "pointer"
            }}
            type="button"
            onClick={handleAddColet}
          >
            Crează
          </Button>
        </form>
      </div>

      <h2 style={{ marginTop: "30px", marginBottom: "20px" }}><strong>Lista de colete</strong></h2>
      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Expeditor</th>
            <th>Destinatar</th>
            <th>Greutate</th>
            <th>Dimensiuni</th>
            <th>Stare de livrare</th>
            <th>Acțiuni</th>
          </tr>
        </thead>
        <tbody>
          {colete.map((colet) => (
            <tr key={colet.id}>
              <td>{colet.id}</td>
              <td>{colet.expeditor}</td>
              <td>{colet.destinatar}</td>
              <td>{colet.greutate}</td>
              <td>{colet.dimensiuni}</td>
              <td>{colet.stareLivrare}</td>
              <td>
                <button
                  style={{
                    backgroundColor: "red",
                    color: "white",
                    borderRadius: "4px",
                    padding: "5px 10px",
                    cursor: "pointer"
                  }}
                  onClick={() => handleDeleteColet(colet.id)}>
                  Șterge
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ColetePage;
