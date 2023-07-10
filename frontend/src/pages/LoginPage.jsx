import { Link } from "react-router-dom"
import Button from "../components/Button"

const Base_Url = "http://localhost:80/api";

const LoginPage = () => {

    const [email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    const handleSubmit = async (e) => {
      e.preventDefault();
    }

    return (
    <div className="flex w-full justify-center p-4"> 
        <form className="flex flex-col items-center justify-around border-gray-200 border-2 rouded-md w-3/4 lg:w"> 
            <input 
              className="lg:3/4 "
              type="text" required placeholder="email" autoCompleter="off" />
            <input 
              type="Password"
              placeholder="Password" 
              required
              autoCompleter="off"
            />
            <Button text="Login" />
            <div className="flex text-lg">
                <p>Nu ai cont?</p>

            
            </div>

        </form>
    </div>;
    );
};

export default LoginPage;