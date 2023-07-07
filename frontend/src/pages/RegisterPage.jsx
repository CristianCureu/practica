


import { useState } from "react";
import Button from "../components/Button";

constRegisterPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");
    const [error, setError] = useState("");

    consthandleSubmit = async (e) => {
        e.preventDefault();
        try {
            constresponse = awaitfetch(
                `${process.env.REACT_APP_BASE_URL}​​​​​​​​/registerUser`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ name, email, password, passwordRepeat }),
                }
            );
            constresposneText = await response.text();
            console.log(response);
            if (response.status === 201) {
                console.log("success");
            } else {
                setError(resposneText);
            }
        } catch (error) {
            console.log("RegisterPage::handleSubmit::", error.message);
        }
    };

    return (
        <div className="flex w-full  justify-center p-4">
            <form className="flex flex-col items-center justify-around border-gray-200 border-2 rounded-md w-3/4 lg:w-2/4 h-96" >
                <input
                    className=" lg:w-3/4  border-gray-400 border-2 text-gray-900 outline-none text-sm rounded-md p-3 focus:border-sky-500"
                    type="text"
                    placeholder="Name"
                    required
                    autoComplete="off"
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    className=" lg:w-3/4  border-gray-400 border-2 text-gray-900 outline-none text-sm rounded-md p-3 focus:border-sky-500"
                    type="text"
                    placeholder="Email"
                    required
                    autoComplete="off"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className=" lg:w-3/4  border-gray-400 border-2 text-gray-900 outline-none text-sm rounded-md p-3 focus:border-sky-500"
                    type="password"
                    placeholder="Password"
                    required
                    autoComplete="off"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    className=" lg:w-3/4  border-gray-400 border-2 text-gray-900 outline-none text-sm rounded-md p-3 focus:border-sky-500"
                    type="password"
                    placeholder="Confirm password"
                    required
                    autoComplete="off"
                    onChange={(e) => setPasswordRepeat(e.target.value)}
                />
                <Button text="register" onClick={handleSubmit} />
                {error ? <div className="text-red-600">{error}​​​​​​​​</div> : null
                }
            </form >
        </div >
    );
};

export default RegisterPage;
