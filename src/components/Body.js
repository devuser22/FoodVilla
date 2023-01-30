//const restaurantList = require("./restaurant-list");
import RestaurantCard from "./Restaurant-card";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";

const Body = ({ user }) => {
  const [searchText, setSearchText] = useState();
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);

  useEffect(() => {
    getRestaurant();
  }, []);

  async function getRestaurant() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.1765331&lng=72.94753299999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurants(json.data.cards[2].data.data.cards);
    setFilterRestaurants(json.data.cards[2].data.data.cards);

    console.log(json);
  }
  // if (filterRestaurants?.length === 0) {
  //   return <h2>Your filter did not met the list</h2>;
  // }

  const isOnline = useOnline();

  if (!isOnline) {
    return <h1> You are offline, please check your internet connection !!</h1>;
  }

  if (!allRestaurants) return null;

  return allRestaurants?.length == 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="my-5 p-5 bg-pink-50">
        <input
          type="text"
          className="p-2 focus:bg-slate-50"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          className="p-2 m-2 bg-gray-900 hover:bg-slate-800 text-white rounded-md"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilterRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap justify-center">
        {filterRestaurants.length === 0 ? (
          <h2>No items found for the search criteria !!</h2>
        ) : (
          filterRestaurants.map((restaurant) => {
            return (
              <Link
                to={"/restaurant/" + restaurant.data.id}
                key={restaurant.data.id}
              >
                <RestaurantCard
                  restaurant={restaurant}
                  key={restaurant.data.id}
                  user={user}
                />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
