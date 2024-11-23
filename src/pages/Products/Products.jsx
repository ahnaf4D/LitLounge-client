import { useEffect, useState } from "react";
import FilterBar from "./FilterBar";
import SearchBar from "./SearchBar";
import Sorting from "./Sorting";
import Loading from "../../components/Loading";
import ProductCard from "./ProductCard";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Products = () => {
    const axiosSecure = useAxiosPublic();
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
        <div className="container mx-auto p-6 bg-base-100">
            <h1 className="text-4xl text-center font-bold my-4 text-primary">Explore Our Products</h1>

            {/* Controls */}
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
                <SearchBar handleSearch={handleSearch} />
                <Sorting setSort={setSort} />
            </div>

            {/* Layout */}
            <div className="grid grid-cols-12 gap-6 mt-8">
                {/* Filter Sidebar */}
                <div className="col-span-12 lg:col-span-3 bg-gray-50 rounded-lg shadow-lg p-4">
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
                        <h2 className="text-center text-xl font-medium text-gray-500">
                            No products found.
                        </h2>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {products.map((product) => (
                                <ProductCard key={product._id} product={product} />
                            ))}
                        </div>
                    )}

                    {/* Pagination */}
                    <div className="flex justify-center mt-8 gap-4">
                        <button
                            className="btn btn-outline btn-secondary"
                            onClick={() => handlePageChange(page - 1)}
                            disabled={page === 1}
                        >
                            <FaAnglesLeft />
                        </button>
                        <span className="text-lg font-semibold text-neutral">
                            Page {page} of {totalPage}
                        </span>
                        <button
                            className="btn btn-outline btn-secondary"
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
