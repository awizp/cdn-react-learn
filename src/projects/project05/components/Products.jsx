import { useMemo, useState } from "react";

import ProductCard from "./ProductCard";
import { products } from "../data/productsData.js";

const Products = () => {


    const [isLoading, setIsLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(8);

    const productList = useMemo(() => {
        return products;
    }, []);

    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;

    const currentPosts = productList.slice(indexOfFirstPost, indexOfLastPost);
    const totalPages = Math.ceil(productList.length / postPerPage);

    const paginationHandle = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className="w-full bg-gray-50">

            <div className="container mx-auto px-3 md:px-0 py-10 space-y-8">

                <h1 className="text-2xl italic text-gray-700 font-bold text-center">Products</h1>

                {/* products details */}
                {!isLoading && <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {currentPosts.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}
                </div>}

                {isLoading && <p className="text-lg font-bold italic text-gray-700">loading products data....</p>}

                {/* pagination handle */}
                <div className="w-full flex items-center justify-center gap-3 mt-15">
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

            </div>

        </div>
    );
};

export default Products;