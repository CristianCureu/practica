import { useEffect } from "react";
import Scanner from "../components/Scanner";
import sql from "../services/SqlService";

export default function HomePage() {
  useEffect(() => {
    sql.query('test');
  }, []);
  return (
    <div>
      <Link to="/dosar-transport">Navigheaza la dosar transport</Link>
      <Scanner />
    </div>
  );
}
