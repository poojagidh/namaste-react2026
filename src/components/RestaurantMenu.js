import Shimmer from "./Shimmer.js";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
    const { id } = useParams();
    const restaurantInfo = useRestaurantMenu(id);
    const [showIndex, setShowIndex] = useState(null);

    if (restaurantInfo === null) return <Shimmer />;

    const { name, cuisines, costForTwo, menu, imageUrl, avgRating, deliveryTime } = restaurantInfo;

    return (
        <main className="max-w-4xl mx-auto px-4 py-8 min-h-screen">
            {/* Restaurant Header Section */}
            <div className="flex flex-col md:flex-row gap-8 items-center border-b pb-8 mb-8">
                <img
                    src={imageUrl}
                    alt={name}
                    className="w-full md:w-64 h-48 object-cover rounded-2xl shadow-lg"
                />
                <div className="flex-1 text-center md:text-left">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">{name}</h1>
                    <p className="text-lg text-gray-600 mb-4">{cuisines?.join(", ")}</p>

                    <div className="flex flex-wrap justify-center md:justify-start gap-6 items-center text-sm font-semibold text-gray-700">
                        <div className="flex items-center gap-1 bg-green-600 text-white px-2 py-1 rounded">
                            <span>⭐ {avgRating}</span>
                        </div>
                        <div className="border-l pl-6 border-gray-300">
                            {deliveryTime} MINS
                        </div>
                        <div className="border-l pl-6 border-gray-300">
                            {costForTwo}
                        </div>
                    </div>
                </div>
            </div>

            {/* Menu List Section */}
            <div className="menu-list">
                {menu?.map((category, index) => (
                    // controlled component
                    <RestaurantCategory
                        key={category.categoryName}
                        data={category}
                        showItems={index === showIndex}
                        setShowIndex={() => setShowIndex(index === showIndex ? null : index)}
                    />
                ))}
            </div>
        </main>
    );
};

export default RestaurantMenu;