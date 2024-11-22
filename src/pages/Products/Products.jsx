import { useState } from "react";
import FilterBar from "./FilterBar";
import SearchBar from "./SearchBar";
import Sorting from "./Sorting";
import Loading from "../../components/Loading";
import ProductCard from "./ProductCard";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import useProducts from "../../hooks/useProducts"; // Import the new custom hook

const Products = () => {
    const [search, setSearch] = useState(" ");
    const [sort, setSort] = useState("asc");
    const [brand, setBrand] = useState("");
    const [category, setCategory] = useState("");
    const [page, setPage] = useState(1);

    // Use the custom hook for fetching products
    const { data, isLoading, isError } = useProducts({
        search,
        page,
        sort,
        brand,
        category
    });

    const { products, productCategory, productBrand, totalProducts } = data || {}; // Destructure the data

    const totalPage = Math.ceil(totalProducts / 9);
    if (isLoading) {
        return <Loading></Loading>
    }
    // Handle search input
    const handleSearch = (e) => {
        e.preventDefault();
        setSearch(e.target.search.value);
        e.target.search = " ";
    };

    // Handle reset
    const handleReset = () => {
        setSearch("");
        setBrand("");
        setCategory("");
        setSort("asc");
        window.location.reload();
    };

    // Handle page change
    const handlePageChange = (newPage) => {
        if (newPage > 0 && newPage <= totalPage) {
            setPage(newPage);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <div className="container mx-auto">
            <h1 className="text-2xl text-center p-4 rounded-md my-6 font-semibold">All Products</h1>

            {/* Search and Sort */}
            <div className="flex flex-col justify-between items-center my-6 lg:flex-row">
                <SearchBar handleSearch={handleSearch}></SearchBar>
                <Sorting setSort={setSort}></Sorting>
            </div>

            {/* Content */}
            <div className="grid grid-cols-12">
                <div className="col-span-2">
                    <FilterBar
                        setBrand={setBrand}
                        setCategory={setCategory}
                        handleReset={handleReset}
                        uniqueBrand={productBrand} // Use the fetched brand list
                        uniqueCategory={productCategory} // Use the fetched category list
                    ></FilterBar>
                </div>
                <div className="col-span-10">
                    {
                        isLoading ? (
                            <Loading />
                        ) : isError ? (
                            <div className="flex items-center justify-center">
                                <h1 className="text-center text-xl font-semibold">Error fetching products</h1>
                            </div>
                        ) : (
                            products?.length === 0 ? (
                                <div className="flex items-center justify-center size-full">
                                    <h1 className="text-center text-xl font-semibold">No Products Found</h1>
                                </div>
                            ) : (
                                <div className="min-h-screen flex flex-col gap-2 mx-6 my-4">
                                    {products.map((product) => (
                                        <ProductCard key={product._id} product={product} />
                                    ))}
                                </div>
                            )
                        )
                    }
                </div>
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-2 my-8">
                <div className="join flex items-center justify-center gap-4">
                    <button className="join-item btn btn-outline" onClick={() => handlePageChange(page - 1)} disabled={page === 1}><FaAnglesLeft /></button>
                    <p>Page {page} of {totalPage}</p>
                    <button className="join-item btn btn-outline" onClick={() => handlePageChange(page + 1)} disabled={page === totalPage}><FaAnglesRight /></button>
                </div>
            </div>
        </div>
    );
};

export default Products;
