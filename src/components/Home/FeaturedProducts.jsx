// FeaturedProducts.js
import { Link } from 'react-router-dom';

const FeaturedProducts = () => {
    const products = [
        {
            "id": 1,
            "title": "The Great Gatsby",
            "description": "A classic novel by F. Scott Fitzgerald.",
            "price": "$12.99",
            "image": "https://placehold.co/600x400"
        },
        {
            "id": 2,
            "title": "To Kill a Mockingbird",
            "description": "A timeless story of racial injustice by Harper Lee.",
            "price": "$15.99",
            "image": "https://placehold.co/600x400"
        },
        {
            "id": 3,
            "title": "1984",
            "description": "A dystopian novel by George Orwell.",
            "price": "$10.99",
            "image": "https://placehold.co/600x400"
        },
        {
            "id": 3,
            "title": "Test books",
            "description": "A dystopian novel by George Orwell.",
            "price": "$10.99",
            "image": "https://placehold.co/600x400"
        }
    ]
    return (
        <div className="container px-6 py-16 mx-auto">
            <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">Featured Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div key={product.id} className="bg-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                        <img src={product.image} alt={product.title} className="w-full h-64 object-cover rounded-t-lg" />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-[#333]">{product.title}</h3>
                            <p className="text-sm text-[#666] mb-3">{product.description}</p>
                            <p className="text-lg font-semibold text-[#ff6a00]">{product.price}</p>
                            <Link to={`/product/${product.id}`} className="inline-block px-6 py-2 mt-4 text-white bg-[#603aa8] rounded-lg hover:bg-[#531ca6] transition-colors duration-300">View Details</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedProducts;
