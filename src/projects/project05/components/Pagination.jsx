const Pagination = ({ paginationHandle, currentPage, totalPages }) => {
    return (
        <div className="w-full flex items-center justify-center gap-3 mt-15">
            <button onClick={() => paginationHandle(1)}
                disabled={currentPage == 1}
                className="text-orange-400 px-3 py-2 cursor-pointer border border-orange-500 rounded-lg font-semibold text-sm hover:bg-orange-500 hover:text-white flex items-center justify-center disabled:opacity-0"
            >
                <ion-icon name="play-back"></ion-icon>
            </button>
            <button onClick={() => paginationHandle(currentPage - 1)}
                disabled={currentPage == 1}
                className="bg-orange-400 px-3 py-2 cursor-pointer hover:bg-orange-500 text-white rounded-lg font-semibold disabled:opacity-70 disabled:cursor-not-allowed text-sm flex items-center justify-center"
            >
                <ion-icon name="chevron-back"></ion-icon>
            </button>
            <div className="bg-white px-3 py-2 cursor-pointer border-2 border-black/20 rounded-lg font-semibold text-sm flex justify-center items-center">
                {currentPage}
            </div>
            <button onClick={() => paginationHandle(currentPage + 1)}
                disabled={currentPage == totalPages}
                className="bg-orange-400 px-3 py-2 cursor-pointer hover:bg-orange-500 text-white rounded-lg font-semibold disabled:opacity-70 disabled:cursor-not-allowed text-sm flex items-center justify-center"
            >
                <ion-icon name="chevron-forward"></ion-icon>
            </button>
            <button onClick={() => paginationHandle(totalPages)}
                className="text-orange-400 px-3 py-2 cursor-pointer border border-orange-500 rounded-lg font-semibold text-sm hover:bg-orange-500 hover:text-white flex items-center justify-center disabled:opacity-0"
                disabled={currentPage == totalPages}
            >
                <ion-icon name="play-forward"></ion-icon>
            </button>
        </div>
    );
};

export default Pagination;