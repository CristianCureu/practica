import { Link } from "react-router-dom";

export default function HomePage() {

  return (
    <div>
      <Link
              to="/login"
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300"
            >
              Birouri
            </Link>
            <Link
              to="/scan/dosar/:idDosar"
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300"
            >
              Sofer
            </Link>
    </div>
  );
}