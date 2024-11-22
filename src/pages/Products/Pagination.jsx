import { FaChevronLeft, FaChevronRight, FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

const Pagination = () => {
    return (
        <div className="flex justify-center items-center space-x-2 my-6">
            {/* First Page Button */}
            <button
                className="px-3 py-2 text-sm font-medium text-gray-500 bg-gray-100 hover:bg-gray-200 rounded-md transition duration-300 flex items-center"
            >
                <FaAngleDoubleLeft className="mr-1" />
                Prev
            </button>

            {/* Previous Page Button */}
            <button
                className="px-3 py-2 text-sm font-medium text-gray-500 bg-gray-100 hover:bg-gray-200 rounded-md transition duration-300 flex items-center"
            >
                <FaChevronLeft />
            </button>

            {/* Page Numbers */}
            <div className="flex space-x-1">
                <button className="px-3 py-2 text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 rounded-md transition duration-300">
                    1
                </button>
                <button className="px-3 py-2 text-sm font-medium text-gray-500 bg-gray-100 hover:bg-gray-200 rounded-md transition duration-300">
                    2
                </button>
                <button className="px-3 py-2 text-sm font-medium text-gray-500 bg-gray-100 hover:bg-gray-200 rounded-md transition duration-300">
                    3
                </button>
                <button className="px-3 py-2 text-sm font-medium text-gray-500 bg-gray-100 hover:bg-gray-200 rounded-md transition duration-300">
                    ...
                </button>
                <button className="px-3 py-2 text-sm font-medium text-gray-500 bg-gray-100 hover:bg-gray-200 rounded-md transition duration-300">
                    10
                </button>
            </div>

            {/* Next Page Button */}
            <button
                className="px-3 py-2 text-sm font-medium text-gray-500 bg-gray-100 hover:bg-gray-200 rounded-md transition duration-300 flex items-center"
            >
                <FaChevronRight />
            </button>

            {/* Last Page Button */}
            <button
                className="px-3 py-2 text-sm font-medium text-gray-500 bg-gray-100 hover:bg-gray-200 rounded-md transition duration-300 flex items-center"
            >
                Next
                <FaAngleDoubleRight className="ml-1" />
            </button>
        </div>
    );
};

export default Pagination;
