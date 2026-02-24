const CarouselItem = ({ item, slide, idx }) => {
    return (
        <>
            <div className={slide === idx ? "slide" : "slide slide-hidden"} >
                <img
                    src={!item.backdrop_path ? "https://picsum.photos/seed/picsum/1600/1000" : item.backdrop_path}
                    alt={`${item.original_title} banner`}
                    key={item.id}
                    className="w-full h-full object-fit"
                />

                <div className={"carousel-content"}>
                    <div className="mr-3 space-y-3 flex flex-col justify-center items-end">
                        <h2 className="text-5xl font-bold text-orange-500 text-shadow-xl uppercase text-right">{item.original_title}</h2>
                        <p className="text-sm font-bold text-gray-300 italic">{item.original_language === "ta" ? "Tamil" : item.original_language}</p>
                        <button className="bg-white font-semibold rounded-lg px-4 py-2 mt-5 text-black cursor-pointer transition hover:-translate-y-0.75 hover:shadow-lg duration-300 flex justify-center items-center gap-1.5 hover:bg-red-500 hover:text-white">
                            <ion-icon name="play-circle-outline"></ion-icon><p>Watch Now</p>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CarouselItem;