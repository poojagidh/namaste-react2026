import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
    const handleClick = () => {
        setShowIndex();
    };
    return (
        <div>
            {/* Header */}
            <div className="w-11/12 md:w-9/12 mx-auto my-4 bg-white shadow p-4 rounded-lg border-b border-gray-200">
                <div
                    className="flex justify-between cursor-pointer hover:bg-gray-50 transition-all duration-300 p-2 rounded-md items-center"
                    onClick={handleClick}
                >
                    <span className="font-extrabold text-xl text-gray-800">
                        {data.categoryName} ({data.items.length})
                    </span>
                    <span className={`transition-transform duration-300 text-gray-500 ${showItems ? "rotate-180" : ""}`}>
                        ▼
                    </span>
                </div>

                {/* Accordion Body */}
                {showItems && <ItemList items={data.items} />}
            </div>
        </div>
    );
};

export default RestaurantCategory;
