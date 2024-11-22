import { useState } from "react";
import FilterBar from "./FilterBar";
import ProductCard from "./ProductCard";
import Searching from "./Searching";
import Sorting from "./Sorting";
import useProducts from "../../hooks/useProducts";
import Loading from "../../components/Loading";
import Pagination from "./Pagination";

const Products = () => {
    const [currentProducts, setCurrentProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOrder, setSortOrder] = useState("asc");
    const [selectedBrand, setSelectedBrand] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [availableBrands, setAvailableBrands] = useState([]);
    const [availableCategories, setAvailableCategories] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const { data, isLoading } = useProducts({ search: searchTerm, page: currentPage, sort: sortOrder, brand: selectedBrand, category: selectedCategory, });
    // const { limit, pageNumber, productBrand, productCategory, products, totalProducts } = data;
    if (isLoading) {
        return <Loading></Loading>
    }
    const { productBrand, productCategory, products } = data;
    return (
        <div className="container mx-auto px-4 py-6">
            <h1 className="text-3xl font-semibold text-gray-800 mb-4 text-center">All Products</h1>

            <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-6 mb-8">
                <Searching />
                <Sorting />
                <div className="flex gap-6 sm:gap-4">
                    <FilterBar topic={productBrand} alt={"Category"} />
                    <FilterBar topic={productCategory} alt={"Brand"} />
                </div>
            </div>

            {/* Add products display section here */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product) => <ProductCard product={product} key={product._id}></ProductCard>)}
            </div>
            <Pagination></Pagination>
        </div>
    );
};

export default Products;
