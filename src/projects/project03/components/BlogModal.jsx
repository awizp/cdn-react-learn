const BlogModal = ({ isBlogShow, blogShowHandle, data, deleteHandle }) => {

    const brokenImageHandle = (e) => {
        e.target.onerror = null;
        e.target.src = "https://picsum.photos/seed/alarm/1500/1200";
    };

    return (
        <section className={`w-full h-fit absolute top-0 left-0 inset-0 z-30 justify-center items-center ${isBlogShow ? 'flex' : 'hidden'}`}>
            {/* overlay */}
            <div className="fixed top-0 left-0 inset-0 z-40 bg-black opacity-85"></div>

            {/* blog details */}
            {data && <div className="w-full mt-20 md:w-[50%] rounded-xl bg-gray-100 p-5 pb-8 z-50 flex flex-col justify-center items-start gap-8 relative">

                <div className="w-full h-110 overflow-hidden rounded-xl">
                    <img src={data.img} alt={data.title} onError={brokenImageHandle}
                        className="w-full h-full object-fit"
                    />
                </div>

                <div className="w-full flex justify-between items-center gap-5 mt-2">
                    <h3 className="text-2xl font-bold">{data.title}</h3>
                    <p className="bg-orange-300 rounded-full px-3 py-1.5 text-xs font-bold">Lifestyle</p>
                </div>

                <div className="text-gray-500 font-semibold">
                    <p>{data.description}</p>
                </div>

                <button
                    onClick={() => deleteHandle(data.id)}
                    className="w-full mt-2 px-3 py-2.5 text-white bg-orange-500 rounded-lg cursor-pointer transition hover:bg-orange-600 hover:-translate-y-0.5 font-semibold"
                >
                    Delete blog
                </button>

                {/* close button */}
                <div onClick={blogShowHandle}
                    className="rounded-full w-6 h-6 absolute z-50 -right-2 -top-2 cursor-pointer bg-orange-600 text-white flex justify-center items-center"
                >
                    <ion-icon name="close"></ion-icon>
                </div>

            </div>}

        </section>
    );
};

export default BlogModal;