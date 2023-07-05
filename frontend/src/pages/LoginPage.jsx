import Navbar from '../components/Navbar';
import LoginForm from "../components/Loginform";

export default function LoginPage() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col w-full items-center mt-10">
        <LoginForm title="Login" />
      </div>
    </div>
  );
};
