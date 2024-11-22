import { FaFilter } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";

const FilterBar = ({ setBrand, setCategory, handleReset, uniqueCategory, uniqueBrand }) => {
    return (
        <div className="bg-gray-200 h-full min-h-screen p-4 rounded-t-md">
            <div className="flex items-center gap-2">
                <FaFilter size={24} />
                <h2 className="text-xl font-semibold">Filters</h2>
            </div>
            <div className="flex flex-col gap-4 my-4">
                <select
                    onChange={(e) => setBrand(e.target.value)}
                    className="select select-bordered w-full"
                >
                    <option value="">All Brands</option>
                    {uniqueBrand.map((val) => (
                        <option key={val} value={val}>
                            {val}
                        </option>
                    ))}
                </select>
                <select
                    onChange={(e) => setCategory(e.target.value)}
                    className="select select-bordered w-full"
                >
                    <option value="">All Categories</option>
                    {uniqueCategory.map((val) => (
                        <option key={val} value={val}>
                            {val}
                        </option>
                    ))}
                </select>
            </div>
            <button className="btn btn-error w-full" onClick={handleReset}>
                <GrPowerReset className="mr-2" />
                Reset
            </button>
        </div>
    );
};

export default FilterBar;
