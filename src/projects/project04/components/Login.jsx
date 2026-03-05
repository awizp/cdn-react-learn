import { useContext } from "react";
import { UserContext } from "../context/UserContext";

import InputField from "./InputField";

const Login = () => {

    const { userData, userDataHandle, loginHandle } = useContext(UserContext);

    return (
        <section className="w-full h-screen py-20 bg-gray-200 text-black">
            <div className="container mx-auto px-3 md:px-0 flex flex-col gap-15 justify-center items-center">

                <title>Login page | CyberTube video platform</title>

                <h1 className="text-3xl font-bold italic">Login to <span className="text-orange-600">CyberTube</span>
                </h1>

                <form onSubmit={loginHandle}
                    className="w-full md:w-[60%] bg-gray-100 rounded-xl p-5 shadow-lg flex flex-col justify-center items-start gap-5">
                    <InputField
                        name="username"
                        label="Enter your username:"
                        type="text"
                        placeholder="Your username"
                        value={userData.username}
                        onChange={userDataHandle}
                    />
                    <InputField
                        name="password"
                        label="Enter your password:"
                        type="password"
                        placeholder="Your password"
                        value={userData.password}
                        onChange={userDataHandle}
                    />

                    <button
                        type="submit"
                        className="w-full px-3 py-2 mt-3 bg-orange-500 text-white font-semibold hover:bg-orange-600 transition hover:-translate-y-0.5 cursor-pointer rounded-lg hover:shadow-lg"
                    >
                        Login
                    </button>
                </form>

            </div>
        </section>
    );
};

export default Login;