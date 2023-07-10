import Scanner from "../components/Scanner";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <Link to="/dosar-transport">Navigheaza la dosar transport</Link>
      <Scanner />
    </div>
  );
}

export default HomePage;
