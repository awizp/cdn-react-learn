import { createContext, useCallback, useState } from "react";

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addToCart = useCallback((product, quantity) => {
        setCart(prev => {
            const existsProduct = prev.find(item => item.id === product.id);

            if (existsProduct) {
                return prev.map(item =>
                    item.id === product.id
                        ? { ...item, quantity }
                        : item
                );
            }

            return [...prev, { ...product, quantity }];
        });
    }, []);

    const updateQuantity = useCallback((id, quantity) => {
        setCart(prev =>
            prev.map(item =>
                item.id === id ? { ...item, quantity } : item
            )
        );
    }, []);

    const removeFromCart = useCallback((id) => {
        setCart(prev => prev.filter(item => item.id !== id));
    }, []);

    return (
        <ProductsContext.Provider value={{ cart, addToCart, updateQuantity, removeFromCart }}>
            {children}
        </ProductsContext.Provider>
    );
};

export { ProductsContext, ProductsProvider };