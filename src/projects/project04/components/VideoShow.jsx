import { useContext } from "react";

import VideoTile from "./VideoTile";
import { VideoContext } from "../context/VideoContext";

const VideoShow = () => {

    const { isLoading, currentPage, totalPages, paginationHandle } = useContext(VideoContext);

    return (
        <section className="w-full py-10">
            <div className="container mx-auto px-3 md:px-0 flex flex-col justify-center items-center gap-10">

                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                    <VideoTile />
                </div>

                {/* pagination area */}
                {!isLoading && (
                    <div className="flex items-center gap-3">
                        <button onClick={() => paginationHandle(1)}
                            className="bg-orange-400 px-3 py-1.5 cursor-pointer hover:bg-orange-500 text-white rounded-lg font-semibold text-sm"
                        >
                            First
                        </button>
                        <button onClick={() => paginationHandle(currentPage - 1)}
                            disabled={currentPage == 1}
                            className="bg-orange-400 px-3 py-1.5 cursor-pointer hover:bg-orange-500 text-white rounded-lg font-semibold disabled:opacity-70 disabled:cursor-not-allowed text-sm"
                        >
                            <ion-icon name="chevron-back"></ion-icon>
                        </button>
                        <div className="bg-white px-3 py-1.5 cursor-pointer border-2 border-black/20 rounded-lg font-semibold text-sm flex justify-center items-center">
                            {currentPage}
                        </div>
                        <button onClick={() => paginationHandle(currentPage + 1)}
                            disabled={currentPage == totalPages}
                            className="bg-orange-400 px-3 py-1.5 cursor-pointer hover:bg-orange-500 text-white rounded-lg font-semibold disabled:opacity-70 disabled:cursor-not-allowed text-sm"
                        >
                            <ion-icon name="chevron-forward"></ion-icon>
                        </button>
                        <button onClick={() => paginationHandle(totalPages)}
                            className="bg-orange-400 px-3 py-1.5 cursor-pointer hover:bg-orange-500 text-white rounded-lg font-semibold text-sm"
                        >
                            Last
                        </button>
                    </div>
                )}

            </div>
        </section>
    );
};

export default VideoShow;