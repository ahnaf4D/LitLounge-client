import { useEffect, useState } from "react";
import FilterBar from "./FilterBar";
import SearchBar from "./SearchBar";
import Sorting from "./Sorting";
import Loading from "../../components/Loading";
import ProductCard from "./ProductCard";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Products = () => {
    const axiosSecure = useAxiosPublic(); // Use the axios instance
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("");
    const [brand, setBrand] = useState("");
    const [category, setCategory] = useState("");
    const [uniqueBrand, setUniqueBrand] = useState([]);
    const [uniqueCategory, setUniqueCategory] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);

    const fetchProducts = async () => {
        setLoading(true);
        try {
            const response = await axiosSecure.get("/products", {
                params: {
                    title: search,
                    page,
                    limit: 9,
                    sort,
                    brand,
                    category,
                },
            });
            const { data } = response;
            setProducts(data.products);
            setUniqueBrand(data.productBrand || []);
            setUniqueCategory(data.productCategory || []);
            setTotalPage(Math.ceil(data.totalProducts / 9));
        } catch (error) {
            toast.error(error.response?.data?.message || "Failed to fetch products. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, [search, sort, brand, category, page]);

    const handleSearch = (e) => {
        e.preventDefault();
        setSearch(e.target.search.value);
        setPage(1);
    };

    const handleReset = () => {
        setSearch("");
        setBrand("");
        setCategory("");
        setSort("");
        setPage(1);
    };

    const handlePageChange = (newPage) => {
        if (newPage > 0 && newPage <= totalPage) {
            setPage(newPage);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl text-center font-bold my-4">All Products</h1>

            {/* Controls */}
            <div className="flex flex-col lg:flex-row justify-between gap-4">
                <SearchBar handleSearch={handleSearch} />
                <Sorting setSort={setSort} />
            </div>

            {/* Layout */}
            <div className="grid grid-cols-12 gap-4 mt-6">
                {/* Filter Sidebar */}
                <div className="col-span-12 lg:col-span-3 bg-gray-100 p-4 rounded-md shadow">
                    <FilterBar
                        setBrand={setBrand}
                        setCategory={setCategory}
                        handleReset={handleReset}
                        uniqueBrand={uniqueBrand}
                        uniqueCategory={uniqueCategory}
                    />
                </div>

                {/* Products */}
                <div className="col-span-12 lg:col-span-9">
                    {loading ? (
                        <Loading />
                    ) : products.length === 0 ? (
                        <h2 className="text-center text-lg font-semibold">
                            No Products Found
                        </h2>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {products.map((product) => (
                                <ProductCard key={product._id} product={product} />
                            ))}
                        </div>
                    )}

                    {/* Pagination */}
                    <div className="flex justify-center mt-6 gap-2">
                        <button
                            className="btn btn-outline"
                            onClick={() => handlePageChange(page - 1)}
                            disabled={page === 1}
                        >
                            <FaAnglesLeft />
                        </button>
                        <span className="text-lg font-semibold">
                            Page {page} of {totalPage}
                        </span>
                        <button
                            className="btn btn-outline"
                            onClick={() => handlePageChange(page + 1)}
                            disabled={page === totalPage}
                        >
                            <FaAnglesRight />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
