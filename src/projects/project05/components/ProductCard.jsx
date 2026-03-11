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

            <p className="w-full text-sm font-semibold text-gray-500">Stock limit: {product.stock}</p>

            <div className="w-full flex justify-between items-center">
                <button
                    className="w-8 h-8 rounded-lg p-3 bg-orange-500 font-semibold cursor-pointer flex justify-center items-center"
                    onClick={decrease}
                >
                    -
                </button>

                <p className="w-8 h-8 border-2 border-black/30 px-4 py-2 flex items-center justify-center rounded-lg">{quantity}</p>

                <button
                    className="w-8 h-8 rounded-lg p-3 bg-orange-500 font-semibold cursor-pointer flex justify-center items-center"
                    onClick={increase}
                >
                    +
                </button>
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