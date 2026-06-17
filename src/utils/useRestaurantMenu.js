import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
    const [restaurantInfo, setRestaurantInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, [resId]);


    const fetchMenu = async () => {
        const data = await fetch(
            "https://my-json-server.typicode.com/poojagidh/namaste-react2026/restaurants/" + resId
        );
        const json = await data.json();
        setRestaurantInfo(json);
    };

    return restaurantInfo;
}

export default useRestaurantMenu;
