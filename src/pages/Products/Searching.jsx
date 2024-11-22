import { FaSearch } from "react-icons/fa";

const Searching = () => {
    return (
        <div className="mx-auto border-2 border-red-500 w-2/4 rounded-xl">
            <form className="flex items-center bg-white p-4 rounded-lg shadow-lg border border-gray-200">
                <input
                    type="text"
                    name="search"
                    placeholder="Search products"
                    className="input input-bordered w-full px-6 py-4 text-lg rounded-lg focus:ring-2 focus:ring-blue-500 transition duration-200"
                />
                <button
                    type="submit"
                    className="ml-2 btn btn-outline flex items-center  bg-blue-500 hover:bg-blue-600 text-white  rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
                >
                    <FaSearch className="text-xl" />
                </button>
            </form>
        </div>
    );
};

export default Searching;
