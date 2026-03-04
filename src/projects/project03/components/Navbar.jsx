const Navbar = () => {
    return (
        <nav className="w-full py-5">
            <div className="container mx-auto px-3 md:px-0 flex justify-between items-center">
                <h2 className="text-2xl font-bold">Blog</h2>

                <button className="flex gap-2 items-center bg-orange-400 px-3 py-2 cursor-pointer rounded-lg hover:bg-orange-500 font-semibold">
                    Add
                    <span className="text-xl flex justify-center items-center">
                        <ion-icon name="add"></ion-icon>
                    </span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;