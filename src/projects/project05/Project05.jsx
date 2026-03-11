import App from "./App";
import './style.css';

import { ProductsProvider } from "./context/ProductsContext";
import { NotificationProvider } from "./context/NotificationContext";

const Project05 = () => {
    return (
        <>
            <ProductsProvider>
                <NotificationProvider>
                    <App />
                </NotificationProvider>
            </ProductsProvider>
        </>
    );
};

export default Project05;