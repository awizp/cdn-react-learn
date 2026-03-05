import { useContext } from "react";

import { VideoContext } from "../context/VideoContext";

const VideoTile = () => {

    const { currentPosts, isLoading } = useContext(VideoContext);

    return (
        <>
            {currentPosts && (
                currentPosts.map((video) => (
                    <div key={video.id} className="w-fit border-2 border-black/20 p-3 bg-white flex flex-col rounded-xl justify-center items-start gap-3 hover:-translate-y-0.5 transition hover:shadow-lg duration-300 cursor-default hover:border-orange-500">

                        <a href={video.link} target="_blank"
                            className="w-full overflow-hidden rounded-xl"
                        >
                            <img src={video.thumbnail.fallback} alt={video.videoTitle}
                                className="w-full h-full object-fit"
                            />
                        </a>

                        <div className="flex flex-col justify-center items-start gap-2">
                            <a href={video.link} target="_blank"><h3 className="font-bold my-2 hover:text-gray-800">{video.videoTitle}</h3></a>

                            <div className="w-full flex justify-between items-center text-sm font-semibold text-gray-500">
                                <p>{video.views} Views</p>
                                <p>{video.date}</p>
                            </div>

                            <div className="w-full flex justify-between items-center font-semibold mt-3">
                                <p className="flex items-center gap-2 cursor-pointer">Like <ion-icon name="thumbs-up"></ion-icon></p>
                                <p className="flex items-center gap-2 cursor-pointer">Save <ion-icon name="bookmark"></ion-icon></p>
                            </div>

                        </div>
                    </div>
                ))
            )}

            {isLoading && <p className="text-orange-400 font-semibold">Videos loading...</p>}
        </>
    );
};

export default VideoTile;