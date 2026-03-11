import { Link, Outlet } from "react-router";
import { UserContext } from "../project04/context/UserContext";

import { ProductsContext } from "./context/ProductsContext";
import { useContext } from "react";

const App = () => {

    const { cart } = useContext(ProductsContext);

    return (
        <main className="w-full bg-gray-50 pb-5">
            <nav className="w-full py-5">
                <div className="flex w-full justify-between items-center container mx-auto px-3 md:px-0">
                    <Link to="/project05/">
                        <h1 className="text-3xl font-bold italic text-orange-600">Grocera</h1>
                    </Link>

                    <Link to="/project05/cart" className="flex justify-center items-center font-semibold italic cursor-pointer relative">
                        <p className="text-2xl"><ion-icon name="bag"></ion-icon></p>
                        <div className="text-sm">{cart.length === 0 ? "" : cart.length}</div>
                    </Link>
                </div>
            </nav>

            {/* products and cart rendering */}
            <Outlet />
        </main>

    );
};

export default App;