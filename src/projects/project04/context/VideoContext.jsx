import { createContext, useState, useEffect } from "react";

const VideoContext = createContext();

const VideoProvider = ({ children }) => {

    const [videos, setVideos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(6);

    // fetching all videos,
    useEffect(() => {
        const fetchVideos = async () => {
            setIsLoading(true);
            const URL = `https://mimic-server-api.vercel.app/videos`;
            const options = {
                method: 'GET',
                redirect: 'follow'
            };

            try {
                const res = await fetch(URL, options);
                const data = await res.json();
                setVideos(data);
            } catch (error) {
                console.error("Error in fetching videos :", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchVideos();
    }, []);

    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;

    const currentPosts = videos.slice(indexOfFirstPost, indexOfLastPost);
    const totalPages = Math.ceil(videos.length / postPerPage);

    const paginationHandle = (page) => {
        setCurrentPage(page);
    };

    return (
        <VideoContext.Provider value={{ currentPosts, isLoading, currentPage, totalPages, paginationHandle }}>
            {children}
        </VideoContext.Provider>
    );
};

export { VideoContext, VideoProvider };