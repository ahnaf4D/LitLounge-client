import { useEffect, useState } from "react";
import FilterBar from "./FilterBar";
import SearchBar from "./SearchBar";
import Sorting from "./Sorting";
import axios from "axios";
import Loading from "../../components/Loading";
import ProductCard from "./ProductCard";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("asc");
    const [brand, setBrand] = useState("");
    const [category, setCategory] = useState("");
    const [uniqueBrand, setUniqueBrand] = useState([]);
    const [uniqueCategory, setUniqueCategory] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);

    const url = `${import.meta.env.VITE_SERVER_URL}/products?title=${search}&page=${page}&limit=9&sort=${sort}&brand=${brand}&category=${category}`;

    useEffect(() => {
        setLoading(true);
        const fetchProducts = async () => {
            try {
                const result = await axios.get(url);
                setProducts(result.data.products);
                setUniqueCategory(result.data.productCategory);
                setUniqueBrand(result.data.productBrand);
                setTotalPage(Math.ceil(result.data.totalProducts / 9));
                setLoading(false);
            } catch (error) {
                setLoading(false);
                toast.error("Failed to fetch products. Please try again.");
            }
        };
        fetchProducts();
    }, [brand, category, page, search, sort]);

    const handleSearch = (e) => {
        e.preventDefault();
        setSearch(e.target.search.value);
        e.target.search.value = ""; // Reset the search input after submission
    };

    const handleReset = () => {
        setSearch("");
        setBrand("");
        setCategory("");
        setSort("asc");
        setPage(1); // Reset the page to 1 when resetting filters
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handlePageChange = (newPage) => {
        if (newPage > 0 && newPage <= totalPage) {
            setPage(newPage);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <div className="container mx-auto">
            <h1 className="text-2xl text-center p-4 rounded-md my-6 font-semibold">All Products</h1>

            {/* Search and Sort Controls */}
            <div className="flex flex-col justify-between items-center my-6 lg:flex-row">
                <SearchBar handleSearch={handleSearch} />
                <Sorting setSort={setSort} />
            </div>

            <div className="grid grid-cols-12">
                <div className="col-span-2">
                    <FilterBar
                        setBrand={setBrand}
                        setCategory={setCategory}
                        handleReset={handleReset}
                        uniqueBrand={uniqueBrand}
                        uniqueCategory={uniqueCategory}
                    />
                </div>

                <div className="col-span-10">
                    {
                        loading ? (
                            <Loading />
                        ) : (
                            products.length === 0 ? (
                                <div className="flex items-center justify-center h-full">
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
                    <button
                        className="join-item btn btn-outline"
                        onClick={() => handlePageChange(page - 1)}
                        disabled={page === 1}
                    >
                        <FaAnglesLeft />
                    </button>
                    <p>Page {page} of {totalPage}</p>
                    <button
                        className="join-item btn btn-outline"
                        onClick={() => handlePageChange(page + 1)}
                        disabled={page === totalPage}
                    >
                        <FaAnglesRight />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Products;
