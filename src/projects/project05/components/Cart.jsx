import { useContext, useMemo, useCallback } from "react";
import { ProductsContext } from "../context/ProductsContext";

import Payment from "./Payment";

const Cart = () => {

    const { cart, updateQuantity, removeFromCart } = useContext(ProductsContext);

    const increase = useCallback((item) => {
        if (item.quantity < item.stock) {
            updateQuantity(item.id, item.quantity + 1);
        }
    }, [updateQuantity]);

    const decrease = useCallback((item) => {
        if (item.quantity > 1) {
            updateQuantity(item.id, item.quantity - 1);
        }
    }, [updateQuantity]);

    const subtotal = useMemo(() => {
        return cart.reduce((acc, item) =>
            acc + item.price * item.quantity, 0
        );
    }, [cart]);

    const gst = useMemo(() => subtotal * 0.05, [subtotal]);

    const total = useMemo(() => subtotal + gst, [subtotal, gst]);

    return (
        <div className="w-full bg-gray-50 pb-10">

            <div className="container mx-auto px-3 md:px-0 space-y-8">

                <h1 className="text-center text-2xl font-bold italic text-gray-700">Cart</h1>

                {cart.length > 0 ?
                    (
                        <div className="my-5 bg-white rounded-xl p-5 space-y-3">
                            {
                                cart.map(item => (

                                    <div key={item.id} className="w-full md:w-[50%] p-3 border-2 border-black/50 flex gap-15 rounded-xl hover:-translate-0.5 transition hover:shadow-lg">

                                        <div className="w-20 h-20 overflow-hidden rounded-xl">
                                            <img src={item?.image} alt={item?.name} className="w-full h-full object-fill" />
                                        </div>

                                        <div className="flex items-start justify-center gap-2 flex-col">
                                            <h3 className="text-lg font-semibold">{item.name}</h3>

                                            <p className="text-gray-700 font-semibold">
                                                Price: ₹{item.price * item.quantity}
                                            </p>
                                        </div>

                                        <div className="flex items-center justify-center gap-5">
                                            <button
                                                onClick={() => decrease(item)}
                                                className="w-8 h-8 rounded-lg p-3 bg-orange-500 font-semibold cursor-pointer flex justify-center items-center"
                                            >-</button>

                                            <p className="w-8 h-8 border-2 border-black/30 px-4 py-2 flex items-center justify-center rounded-lg">{item.quantity}</p>

                                            <button
                                                onClick={() => increase(item)}
                                                className="w-8 h-8 rounded-lg p-3 bg-orange-500 font-semibold cursor-pointer flex justify-center items-center"
                                            >+</button>
                                        </div>

                                        <div className="flex items-center justify-center">
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="w-fit p-2 rounded-lg bg-orange-500 font-semibold cursor-pointer transition hover:shadow-lg hover:bg-orange-600"
                                            >
                                                Remove
                                            </button>
                                        </div>

                                    </div>

                                ))
                            }
                        </div>
                    ) : (
                        <div className="my-5 bg-white rounded-xl p-10">
                            <p className="text-center text-gray-700">You didn't add products here, Add one to proceed!</p>
                        </div>
                    )}

                {cart.length > 0 &&
                    <>
                        <hr className="opacity-20" />

                        <div className="w-full space-y-3 text-right">
                            <h3 className="text-gray-700 font-semibold">Subtotal : ₹{subtotal}</h3>

                            <h3 className="text-gray-700 font-semibold">GST (5%) : ₹{gst.toFixed(2)}</h3>

                            <h2 className="text-lg font-semibold">Total : ₹{total.toFixed(2)}</h2>

                            <button
                                className="w-fit px-3 py-2 rounded-lg bg-orange-500 font-semibold cursor-pointer transition hover:shadow-lg hover:bg-orange-600 mt-3"
                            >Pay Amount</button>
                        </div>
                    </>}
            </div>

            {/* <div className="fixed inset-0 w-full h-screen top-0 left-0 z-30">
                <div className="absolute inset-0 w-full h-full top-0 left-0 z-40 bg-black opacity-85"></div>
                <div className="z-50">
                    <Payment />
                </div>
            </div> */}

        </div>
    );
};

export default Cart;