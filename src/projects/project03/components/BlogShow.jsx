import ImageEl from "./ImageEl";

const BlogShow = ({ data, blogShowHandle }) => {
    return (
        <section className="w-full py-5">
            <div className="container mx-auto px-3 md:px-0 flex justify-center items-center">
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                    {
                        data.map((datum) => {
                            const { id, title, category, img, description } = datum;

                            return (
                                <div key={id} className="w-full flex flex-col justify-center items-start relative p-10 bg-white rounded-xl overflow-hidden cursor-pointer transition hover:-translate-y-0.5 duration-300 hover:shadow-lg">
                                    <ImageEl src={img} alt={title} />
                                    <div className="w-full inset-0 bg-black opacity-85 absolute top-0 left-0 z-10"></div>
                                    <div className="flex flex-col justify-center items-start gap-5 z-20 text-white">
                                        <p className="text-gray-300 font-semibold text-sm italic">{category}</p>

                                        <h3 className="text-3xl font-bold">{title}</h3>

                                        <p className="text-sm text-gray-200">{description}</p>

                                        <button onClick={() => blogShowHandle(id)}
                                            className="text-lg font-semibold flex items-center gap-2 hover:underline cursor-pointer">
                                            Read More <ion-icon name="arrow-forward"></ion-icon>
                                        </button>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default BlogShow;