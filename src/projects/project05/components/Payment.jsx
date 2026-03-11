import { useState } from 'react';

const App = () => {

    const [img, setImg] = useState('');

    const [loading, setLoading] = useState(false);

    const [inputErr, setInputErr] = useState(false);

    const [data, setData] = useState('');

    const [size, setSize] = useState('150');


    const generateQR = async () => {
        if (data === '') {
            setInputErr(true);
        } else {
            setInputErr(false);
            setLoading(true);

            try {
                const url = `http://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(data)}&size=150x150`;
                setImg(url);
            } catch (error) {
                console.error("Error generating QR Code", error);
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <div>
            Payment
        </div>
    );
};

export default App;