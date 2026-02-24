import { useState, useEffect } from "react";
import MovieBanner from "./components/MovieBanner";
import MovieShowcase from "./components/MovieShowcase";

import "./style.css";
import Navbar from "./components/Navbar";

const Project01 = () => {

    const URL = `https://mimic-server-api.vercel.app/movies`;

    const [bannerData, setBannerData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchItem, setSearchItem] = useState("");

    useEffect(() => {
        const bannerMovies = async () => {
            try {
                setIsLoading(true);

                const res = await fetch(URL);
                const data = await res.json();
                setBannerData(data);
                let newData;
                if (!searchItem.length == 0) {
                    newData = bannerData.filter((movie) =>
                        movie.title.toLocaleLowerCase().includes(searchItem.toLocaleLowerCase()) && movie);
                    setBannerData(newData);
                }

            } catch (error) {
                console.log("Fetching error in movie banner data: ", error);
            } finally {
                setIsLoading(false);
            }
        };

        bannerMovies();
    }, [URL, searchItem]);

    return (
        <div className="w-full">
            <Navbar searchItem={searchItem} setSearchItem={setSearchItem} bannerData={bannerData} isLoading={isLoading} />

            {/* movies banner */}
            {!isLoading && searchItem.length == 0 && <MovieBanner bannerData={bannerData} isLoading={isLoading} />}

            <h3 className="text-orange-500 font-semibold italic mt-20 text-xl text-center">Available Movies</h3>

            {/* movies showcase */}
            {!isLoading && <MovieShowcase bannerData={bannerData} isLoading={isLoading} searchItem={searchItem} />}
        </div>
    );
};

export default Project01;