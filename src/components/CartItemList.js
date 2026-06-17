import { useDispatch } from "react-redux";
import { addItem, decreaseItem, removeItem } from "../utils/cartSlice";

const CartItemList = ({ items }) => {
    const dispatch = useDispatch();

    return (
        <div>
            {items.map((item) => (
                <div
                    key={item.id}
                    className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between gap-4 py-6"
                >
                    <div className="w-8/12">
                        <span className="font-bold text-gray-800 text-lg block">
                            {item.name}
                        </span>
                        <span className="block text-gray-700 font-medium mt-1">
                            ₹{item.price ?? item.defaultPrice}
                        </span>
                        {item.description && (
                            <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                                {item.description}
                            </p>
                        )}
                    </div>

                    <div className="w-4/12 flex flex-col items-end justify-center gap-3">
                        <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
                            <button
                                aria-label={`Decrease ${item.name}`}
                                className="w-8 h-8 rounded-md bg-white text-gray-700 font-bold hover:bg-gray-50"
                                onClick={() => dispatch(decreaseItem(item))}
                            >
                                −
                            </button>
                            <span
                                data-testid="itemQuantity"
                                className="w-6 text-center font-semibold text-gray-800"
                            >
                                {item.quantity}
                            </span>
                            <button
                                aria-label={`Increase ${item.name}`}
                                className="w-8 h-8 rounded-md bg-white text-gray-700 font-bold hover:bg-gray-50"
                                onClick={() => dispatch(addItem(item))}
                            >
                                +
                            </button>
                        </div>
                        <button
                            className="text-sm text-red-500 font-medium hover:text-red-600"
                            onClick={() => dispatch(removeItem(item))}
                        >
                            Remove
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CartItemList;
