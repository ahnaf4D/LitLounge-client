import { FaShoppingCart, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import axios from 'axios';

const ProductCard = ({ product }) => {
    console.log(product);
    return (
        <Link to={`/product/${product._id}`}>
            <div className="card card-side max-w-4xl bg-white shadow-xl rounded-lg overflow-hidden mx-auto hover:scale-105 transition-transform duration-300 p-6 cursor-pointer m-6 ease-in-out">
                {/* Product Image */}
                <figure className="relative">
                    <img
                        src={product.productImage}
                        alt={product.productName}
                        className="max-w-xl object-cover size-40 rounded-t-lg transition-transform duration-300 ease-in-out"
                    />
                </figure>

                {/* Card Body */}
                <div className="card-body p-4 max-w-xl">
                    <h2 className="card-title text-xl font-semibold text-gray-800 truncate">{product.productName}</h2>
                    <p className="text-gray-600 mt-2 text-sm text-balance">
                        {product.productDescription.length < 40 ? `${product.productDescription}` : `${product.productDescription.slice(0, 50)}.....`}
                    </p>

                    {/* Price, Stock, Brand, and Category */}
                    <div className="mt-4 space-y-2">
                        <p className="text-lg font-bold text-green-600">${product.productPrice}</p>
                        <p className="text-sm text-gray-600">Stock: <span className="text-gray-800">{product.productStock}</span></p>
                        <p className="text-sm text-gray-600">Brand: <span className="font-medium">{product.productBrand}</span></p>
                        <p className="text-sm text-gray-600">Category: <span className="font-medium">{product.productCategory}</span></p>
                        <p className="text-sm text-gray-600">Seller Email: <span className="font-medium">{product.sellerEmail}</span></p>
                    </div>

                    {/* Add to Cart Button */}
                    <div className="card-actions justify-end mt-4">
                        <div className='flex justify-around items-center'>
                            <button className="btn btn-primary hover:bg-blue-600 transition-all">
                                <FaShoppingCart className="mr-2" />
                                Add to Cart
                            </button>
                            <button className="btn btn-warning ml-2 transition-all" >
                                <FaHeart className="mr-2" />
                                Add to Wishlist
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Link>

    );
};

export default ProductCard;
