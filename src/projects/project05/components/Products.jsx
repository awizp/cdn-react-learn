import { useMemo, useState } from "react";

import ProductCard from "./ProductCard";
import Pagination from "./Pagination.jsx";
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
                <Pagination
                    totalPages={totalPages}
                    currentPage={currentPage}
                    paginationHandle={paginationHandle}
                />

            </div>

        </div>
    );
};

export default Products;