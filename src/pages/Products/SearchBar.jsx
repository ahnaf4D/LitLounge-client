import { FaSearch } from "react-icons/fa";
const SearchBar = ({ handleSearch }) => {

    return (
        <div>
            <form onSubmit={handleSearch}>
                <input type="search" placeholder="Search products..." name="search" className="max-w-md input input-bordered mr-2" />
                <button className="btn btn-neutral text-white "><FaSearch />Search</button>
            </form>
        </div>
    );
};

export default SearchBar;