const ProductCard = () => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-sm mx-auto border border-gray-200">
            <img
                src="https://via.placeholder.com/100x200?text=Book+Cover"
                alt="Book Cover"
                className="w-full h-64 object-cover"
            />
            <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    The Great Gatsby
                </h3>
                <p className="text-lg font-semibold text-gray-900 mb-4">$15.99</p>
                <p className="text-gray-700 text-sm mb-4">
                    A novel of the Jazz Age, The Great Gatsby explores the theme of the American Dream through
                </p>
                <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
