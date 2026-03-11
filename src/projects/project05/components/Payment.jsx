import { useState, useCallback } from 'react';

const Payment = ({ cart, subtotal, total, gst, handlePaywall }) => {

    const [img, setImg] = useState('');

    const [loading, setLoading] = useState(false);

    const [inputErr, setInputErr] = useState(false);

    const [isGenerated, setIsGenerated] = useState(false);

    let qrData = `You have to pay for products that you have purchased, ₹${total} rupees.`;

    const generateQR = async () => {
        if (qrData === '') {
            setInputErr(true);
        } else {
            setInputErr(false);
            setLoading(true);

            try {
                const url = `http://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qrData)}&size=150x150`;
                setImg(url);
            } catch (error) {
                console.error("Error generating QR Code", error);
            } finally {
                setLoading(false);
                setIsGenerated(true);
            }
        }
    };

    return (
        <div
            className='w-full md:w-[50%] mx-3 md:mx-0 p-10 bg-white rounded-xl flex flex-col md:flex-row justify-center items-center gap-10 z-50 relative'>
            <div className="w-full space-y-3 flex justify-center items-center">
                <div className="w-full p-5 space-y-3">
                    <h3 className="text-gray-700 font-semibold text-sm">Total items : {cart.length} items</h3>

                    <h3 className="text-gray-700 font-semibold text-sm">Subtotal : ₹{subtotal}</h3>

                    <h3 className="text-gray-700 font-semibold text-sm">GST (5%) : ₹{gst.toFixed(2)}</h3>

                    <h2 className="text-xl font-semibold">Total : ₹{total.toFixed(2)}</h2>

                    <button onClick={generateQR}
                        className="w-fit px-3 py-2 rounded-lg border-2 text-orange-500 border-orange-500 font-semibold cursor-pointer transition hover:shadow-lg mt-3 flex gap-2 items-center hover:bg-orange-500 hover:text-black"
                    >Pay via QrCode <ion-icon name="arrow-forward"></ion-icon></button>
                </div>
            </div>
            <div className='w-full border-2 border-black/50 rounded-xl p-5 space-y-3 text-center'>
                {inputErr && <p>QR code generating failed!</p>}
                {loading && <p>QR code is generating...</p>}

                <div className='w-full flex justify-center items-center'>
                    {isGenerated &&
                        <img src={img} alt="purchase QR code" className='w-full h-full object-fill' />
                    }
                </div>
                {!isGenerated && <p>Generate QR code to pay!</p>}
                {isGenerated && <p>Your payment details</p>}
            </div>

            <div onClick={handlePaywall} className='absolute -top-5 -right-5 text-3xl cursor-pointer text-red-500'>
                <ion-icon name="close-circle"></ion-icon>
            </div>
        </div>
    );
};

export default Payment;