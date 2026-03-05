import { UserProvider } from "./context/UserContext";
import App from "./App";

const Project04 = () => {
    return (
        <UserProvider>
            <App />
        </UserProvider>
    );
};

export default Project04;