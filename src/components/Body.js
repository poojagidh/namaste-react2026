import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Offline from "./Offline";

const Body = () => {
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://my-json-server.typicode.com/poojagidh/namaste-react2026/restaurants"
    );
    const json = await data.json();
    setListOfRestaurants(json);
    setFilteredRestaurant(json);
  };

  const filterBySearch = (query) => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) {
      setFilteredRestaurant(listOfRestaurants);
      return;
    }

    const filteredList = listOfRestaurants.filter((res) => {
      const matchesName = res.name.toLowerCase().includes(normalizedQuery);
      const matchesCuisine = res.cuisines?.some((cuisine) =>
        cuisine.toLowerCase().includes(normalizedQuery)
      );
      return matchesName || matchesCuisine;
    });
    setFilteredRestaurant(filteredList);
  };

  const handleSearch = () => {
    filterBySearch(searchText);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchText(value);
    filterBySearch(value);
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) return <Offline />;

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-screen">
      {/* Search Bar & Filters */}
      <div className="mb-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="relative w-full sm:w-96">
          <input
            type="text"
            data-testid="searchInput"
            placeholder="Search for restaurants..."
            className="w-full pl-4 pr-10 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent shadow-sm text-gray-700 bg-white transition-all"
            value={searchText}
            onChange={handleSearchChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />
          <button
            aria-label="Search"
            className="absolute right-4 top-3.5 text-gray-400 cursor-pointer hover:text-orange-500 transition-colors"
            onClick={handleSearch}
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>

        <button
          className="px-6 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full font-medium transition-colors text-sm flex items-center gap-2"
          onClick={() => {
            setSearchText("");
            const filteredList = listOfRestaurants.filter(
              (res) => res.avgRating > 4
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          <span>Filter: Top Rated</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg>
        </button>
      </div>

      {listOfRestaurants.length === 0 ? (
        <Shimmer />
      ) : filteredRestaurant.length === 0 ? (
        <p className="text-center text-gray-500 text-lg py-12">
          No restaurants found for &quot;{searchText}&quot;
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 place-items-center sm:place-items-stretch">
          {filteredRestaurant.map((restaurant) => (
            <Link to={"restaurants/" + restaurant.id} key={restaurant.id}>
              {restaurant.promoted ? (
                <RestaurantCardPromoted resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          ))}
        </div>
      )}
    </main>
  );
};

export default Body;