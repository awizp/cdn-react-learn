import { useState, createContext } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {

    const [userData, setUserData] = useState({
        username: "",
        password: ""
    });

    const [isLogged, setIsLogged] = useState(false);

    const userDataHandle = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const loginHandle = (e) => {
        e.preventDefault();

        const { username, password } = userData;

        if (username, password === "") return;

        if (username === 'awizp' && password === '12345') setIsLogged(true);
    };

    const logoutHandle = (e) => {
        setIsLogged(false);
    };

    return (
        <UserContext.Provider value={{ userData, userDataHandle, loginHandle, isLogged, logoutHandle }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };