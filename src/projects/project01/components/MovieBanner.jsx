import { useEffect, useState } from "react";
import { Carousel } from "./Carousel";

const MovieBanner = ({ bannerData, isLoading }) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const randomBanner = () => {
            for (let i = 0; i < 5; i++) {
                let randomNum = Math.floor(Math.random() * bannerData.length);

                let newData = bannerData[randomNum];

                setData(prev => [...prev, newData]);
            }
        };

        randomBanner();
    }, [bannerData]);

    return (
        <div className="w-full">
            {!isLoading && <Carousel data={data} />}
            {
                isLoading && <p>Loading movie data...</p>
            }
        </div>
    );
};

export default MovieBanner;