import { createContext, useState, useCallback } from "react";

const NotificationContext = createContext();

const NotificationProvider = ({ children }) => {

    const [message, setMessage] = useState("");
    const [show, setShow] = useState(false);

    const notify = useCallback((msg) => {
        setMessage(msg);
        setShow(true);

        setTimeout(() => {
            setShow(false);
        }, 2000);
    }, []);

    return (
        <NotificationContext.Provider value={{ notify }}>
            {children}

            {show && (
                <div style={toastStyle}>
                    {message}
                </div>
            )}

        </NotificationContext.Provider>
    );
};

export { NotificationContext, NotificationProvider };

const toastStyle = {
    position: "fixed",
    top: "30px",
    right: "30px",
    background: "#222",
    color: "white",
    padding: "12px 20px",
    borderRadius: "6px",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.2)"
};