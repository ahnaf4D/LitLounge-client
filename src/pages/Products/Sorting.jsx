import { useState } from "react";
import { FaSortAmountUpAlt, FaSortAmountDownAlt } from "react-icons/fa";

const Sorting = () => {
    const [sort, setSort] = useState("asc");

    const handleSortToggle = () => {
        setSort(sort === "asc" ? "desc" : "asc");
    };

    return (
        <div className="flex items-center gap-4 w-3/4">
            <button
                onClick={handleSortToggle}
                className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-100 rounded-lg border border-gray-300 hover:bg-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                <p className="text-gray-600">Sort</p>
                {sort === "asc" ? (
                    <FaSortAmountUpAlt className="text-gray-600 transition-transform duration-200 transform" />
                ) : (
                    <FaSortAmountDownAlt className="text-gray-600 transition-transform duration-200 transform" />
                )}
            </button>
        </div>
    );
};

export default Sorting;
