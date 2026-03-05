import { useContext } from "react";

import { UserContext } from "./context/UserContext";
import Login from "./components/Login";
import HeroPage from "./components/HeroPage";

const App = () => {

    const { isLogged } = useContext(UserContext);

    return (
        <main className="w-full bg-gray-100 text-black">
            {!isLogged && <Login />}
            {isLogged && <HeroPage />}
        </main>
    );
};

export default App;