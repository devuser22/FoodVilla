//const restaurantList = require("./restaurant-list");
import RestaurantCard from "./Restaurant-card";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";

const Body = () => {
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
  if (!allRestaurants) return null;
  // if (filterRestaurants?.length === 0) {
  //   return <h2>Your filter did not met the list</h2>;
  // }
  return allRestaurants?.length == 0 ? (
    <Shimmer />
  ) : (
    <> 
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilterRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
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
