const Sorting = ({ setSort }) => {
    return (
        <div className="flex justify-center items-center">
            <div className="dropdown mx-4">
                <select className="select select-success w-full max-w-xs" onChange={(e) => setSort(e.target.value)}>
                    <option selected value="">Sort</option>
                    <option value="asc">Low to High</option>
                    <option value="dsc">High to Low</option>
                </select>
            </div>
        </div>
    );
};

export default Sorting;
