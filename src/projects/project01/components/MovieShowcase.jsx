import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

const MovieShowcase = ({ bannerData, isLoading }) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const randomBanner = () => {
            setData([]);

            if (bannerData.length <= 20) {
                setData(bannerData);
            } else {
                for (let i = 0; i < 20; i++) {

                    let newData = bannerData[i];

                    setData(prev => [...prev, newData]);
                }
            }
        };

        randomBanner();
    }, [bannerData, isLoading]);

    return (
        <div className="w-full py-20 px-5">
            <div className="w-full grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-5">
                {!isLoading && <MovieCard data={data} isLoading={isLoading} />}
            </div>
            {isLoading && <p>Loading movie data...</p>}
        </div>
    );
};

export default MovieShowcase;