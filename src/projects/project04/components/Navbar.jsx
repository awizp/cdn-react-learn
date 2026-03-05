import { useContext } from "react";

import { UserContext } from "../context/UserContext";

const Navbar = () => {

    const { userData, logoutHandle } = useContext(UserContext);

    return (
        <nav className="w-full py-5">
            <div className="container mx-auto px-3 md:px-0 flex justify-between items-center">

                <h2 className="text-2xl font-bold">
                    Hi! <span className="text-orange-600 capitalize italic">{userData.username}</span>
                </h2>

                <button
                    className="bg-orange-500 px-3 py-2 rounded-lg cursor-pointer hover:bg-orange-600 transition hover:-translate-y-px hover:shadow-lg text-white flex items-center gap-2"
                    onClick={logoutHandle}> Logout <ion-icon name="arrow-forward"></ion-icon>
                </button>

            </div>
        </nav>
    );
};

export default Navbar;