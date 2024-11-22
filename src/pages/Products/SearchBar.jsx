import { FaSearch } from "react-icons/fa";

const SearchBar = ({ handleSearch }) => {
    return (
        <form onSubmit={handleSearch} className="flex items-center">
            <input
                type="text"
                name="search"
                placeholder="Search products..."
                className="input input-bordered w-full max-w-sm"
            />
            <button className="btn btn-neutral ml-2 flex items-center">
                <FaSearch className="mr-1" />
                Search
            </button>
        </form>
    );
};

export default SearchBar;
