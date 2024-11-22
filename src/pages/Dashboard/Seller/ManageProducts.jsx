import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useProducts from "../../../hooks/useProducts";

const ManageProducts = () => {
    const { products, loading, error } = useProducts();
    const [filteredProducts, setFilteredProducts] = useState(products);
    console.log(products);
    // Sorting function for table
    const handleSort = (column) => {
        const sorted = [...filteredProducts].sort((a, b) => {
            if (a[column] < b[column]) return -1;
            if (a[column] > b[column]) return 1;
            return 0;
        });
        setFilteredProducts(sorted);
    };

    // Deleting a product
    const handleDelete = (productId) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "Cancel",
        }).then(async (result) => {
            if (result.isConfirmed) {
                // Assuming deleteProduct is a function that deletes the product
                await deleteProduct(productId);
                Swal.fire("Deleted!", "The product has been deleted.", "success");
            }
        });
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading products.</div>;

    return (
        <div className="p-8">
            <h1 className="text-2xl font-semibold text-center text-indigo-600 mb-6">
                Manage Your Products
            </h1>

            <table className="min-w-full table-auto border-collapse bg-white rounded-lg shadow-lg">
                <thead>
                    <tr className="bg-gray-200">
                        <th
                            className="py-2 px-4 text-sm font-medium text-gray-700 cursor-pointer hover:bg-gray-100"
                            onClick={() => handleSort("name")}
                        >
                            Product Name
                        </th>
                        <th
                            className="py-2 px-4 text-sm font-medium text-gray-700 cursor-pointer hover:bg-gray-100"
                            onClick={() => handleSort("category")}
                        >
                            Category
                        </th>
                        <th
                            className="py-2 px-4 text-sm font-medium text-gray-700 cursor-pointer hover:bg-gray-100"
                            onClick={() => handleSort("price")}
                        >
                            Price
                        </th>
                        <th
                            className="py-2 px-4 text-sm font-medium text-gray-700 cursor-pointer hover:bg-gray-100"
                            onClick={() => handleSort("stock")}
                        >
                            Stock
                        </th>
                        <th className="py-2 px-4 text-sm font-medium text-gray-700">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredProducts.map((product) => (
                        <tr key={product.id} className="border-b">
                            <td className="py-3 px-4 text-sm text-gray-800">{product.name}</td>
                            <td className="py-3 px-4 text-sm text-gray-600">{product.category}</td>
                            <td className="py-3 px-4 text-sm text-gray-600">${product.price.toFixed(2)}</td>
                            <td className="py-3 px-4 text-sm text-gray-600">{product.stock}</td>
                            <td className="py-3 px-4 text-sm">
                                <button
                                    className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-all"
                                    onClick={() => handleEdit(product.id)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all ml-2"
                                    onClick={() => handleDelete(product.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

// Mock function to simulate product deletion (replace with actual function)
const deleteProduct = async (productId) => {
    console.log("Product deleted with ID:", productId);
};

export default ManageProducts;
