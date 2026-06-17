import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        //dispatch action
        dispatch(addItem(item));
    }
    return (
        <div>
            {items.map((item, index) => (
                <div
                    key={`${item.id}-${index}`}
                    className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between gap-4 py-8"
                >
                    <div className="w-9/12">
                        <div className="py-2">
                            <span className="font-bold text-gray-800 text-lg display-block">{item.name}</span>
                            <span className="block text-gray-700 font-medium mt-1">
                                ₹{item.price ? item.price : item.defaultPrice}
                            </span>
                        </div>
                        <p className="text-sm text-gray-500 mt-2 leading-relaxed w-10/12">{item.description}</p>
                    </div>
                    <div className="w-3/12 p-4 flex justify-end items-center">
                        <button className="px-8 py-2 bg-white text-green-600 font-extrabold rounded-lg shadow-lg border border-gray-100 hover:bg-gray-50 transition-all uppercase text-sm whitespace-nowrap" onClick={() => handleAddItem(item)}>
                            ADD
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemList;
