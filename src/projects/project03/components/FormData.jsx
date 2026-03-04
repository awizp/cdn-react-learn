import InputField from "./InputField";

const FormData = ({ formShow, formData, handleFormData, onSubmit, closeEvent }) => {
    return (
        <section className={`w-full h-screen fixed top-0 left-0 inset-0 z-30 justify-center items-center ${formShow ? 'flex' : 'hidden'}`}>
            {/* overlay */}
            <div className="absolute top-0 left-0 inset-0 z-40 bg-black opacity-85"></div>

            {/* formdata */}
            <form onSubmit={onSubmit}
                className="w-full md:w-[60%] rounded-xl bg-gray-100 p-10 z-50 flex flex-col justify-center items-start gap-5 relative"
            >

                {/* title */}
                <InputField
                    name="title"
                    label="Enter the blog title"
                    placeholder="Enter the title"
                    value={formData.title}
                    onChange={handleFormData}
                />

                {/* category */}
                <InputField
                    name="category"
                    label="Enter the blog category"
                    placeholder="Enter the category"
                    value={formData.category}
                    onChange={handleFormData}
                />

                {/* image */}
                <InputField
                    name="img"
                    label="Enter the image url"
                    placeholder="Enter image link"
                    value={formData.img}
                    onChange={handleFormData}
                />

                {/* description */}
                <InputField
                    textVal={true}
                    value={formData.description}
                    onChange={handleFormData}
                    name="description"
                    label="Enter the blog description"
                />

                <button
                    type="submit"
                    className="bg-orange-500 hover:bg-orange-600 w-full mt-4 transition hover:-translate-y-0.5 cursor-pointer px-4 py-3 rounded-lg font-semibold text-white"
                >
                    Submit
                </button>

                {/* remove button */}
                <div onClick={closeEvent}
                    className="rounded-full w-6 h-6 absolute z-50 -right-2 -top-2 cursor-pointer bg-orange-600 text-white flex justify-center items-center"
                >
                    <ion-icon name="close"></ion-icon>
                </div>
            </form>
        </section>
    );
};

export default FormData;