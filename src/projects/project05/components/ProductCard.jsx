import { useState, useContext, useCallback } from "react";
import { ProductsContext } from "../context/ProductsContext";
import { NotificationContext } from "../context/NotificationContext";

const ProductCard = ({ product }) => {

    const { addToCart } = useContext(ProductsContext);
    const { notify } = useContext(NotificationContext);

    const [quantity, setQuantity] = useState(1);

    const increase = useCallback(() => {
        if (quantity < product.stock) {
            setQuantity(quantity + 1);
        }
    }, [quantity, product.stock]);

    const decrease = useCallback(() => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }, [quantity]);

    const handleAdd = () => {
        addToCart(product, quantity);

        notify(`${product.name} added to cart`);
    };

    return (
        <div className="w-full border-2 border-black/50 flex flex-col gap-5 justify-center items-center p-5 bg-white hover:-translate-y-0.5 transition hover:shadow-lg rounded-xl cursor-default">

            <div className="w-full overflow-hidden rounded-xl">
                <img src={product.image} alt={product.name} className="w-full h-full object-fill" />
            </div>

            <div className="w-full flex justify-between items-center">
                <h3 className="text-lg font-semibold">{product.name}</h3>

                <p className="font-semibold text-gray-700">₹{product.price}</p>
            </div>

            <div className="w-full flex justify-between items-center">
                <p className="text-sm font-semibold text-gray-500">{product.quantity}</p>
                <p className="text-sm font-semibold text-gray-500">Stock: {product.stock}</p>
            </div>

            <button
                className="w-full px-3 py-2 rounded-lg bg-orange-500 font-semibold cursor-pointer hover:-translate-y-0.5 transition hover:shadow-lg hover:bg-orange-600 mt-3"
                onClick={handleAdd}
            >
                Add to Cart
            </button>

        </div>
    );
};

export default ProductCard;