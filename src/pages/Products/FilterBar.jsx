import { Tooltip } from 'react-tooltip'
const FilterBar = ({ topic, alt }) => {

    return (
        <div>

            <select name="" data-tooltip-id="my-tooltip"
                data-tooltip-content={`Sort by ${alt}`}
                data-tooltip-place="top" id="" className="border-2 p-2 border-black rounded-lg cursor-pointer tooltip" data-tip="hello">
                <option value="" disabled selected>Select {alt}</option>
                {topic.map((top, index) => <option value={top} key={index} >{top}</option>)}
            </select>
            <Tooltip id="my-tooltip" />

        </div>
    );
};
export default FilterBar;
