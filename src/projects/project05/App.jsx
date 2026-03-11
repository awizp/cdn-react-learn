import { Link, Outlet } from "react-router";

const App = () => {
    return (
        <main className="w-full bg-gray-50 pb-5">
            <nav className="w-full py-5">
                <div className="flex w-full justify-between items-center container mx-auto px-3 md:px-0">
                    <Link to="/project05/">
                        <h1 className="text-3xl font-bold italic text-orange-700">Grocera</h1>
                    </Link>

                    <Link to="/project05/cart" className="flex justify-between gap-2 items-center font-semibold italic cursor-pointer">
                        <ion-icon name="bag"></ion-icon>
                        <p>Cart</p>
                    </Link>
                </div>
            </nav>

            {/* products and cart rendering */}
            <Outlet />
        </main>

    );
};

export default App;