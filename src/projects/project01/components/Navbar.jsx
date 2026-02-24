const Navbar = ({ searchItem, setSearchItem, isLoading }) => {

    const handleSearch = (e) => {
        e.preventDefault();
        !isLoading && setSearchItem(e.target.value);
    };

    return (
        <div className="w-full">
            <div className="container mx-auto px-3 md:px-0 flex justify-between items-center py-3">

                <h1 className="text-2xl font-bold text-red-600 uppercase">Cyberflix</h1>

                <input type="text" placeholder="Search movies"
                    className="px-3 py-1 rounded-full font-semibold bg-zinc-700"
                    value={searchItem}
                    onChange={(e) => handleSearch(e)}
                />
            </div>
        </div>
    );
};

export default Navbar;