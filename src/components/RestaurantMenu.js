import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";
import { IMG_CDN_URL } from "./constant";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();

  //const [restaurant, setRestaurant] = useState(null);

  const restaurant = useRestaurant(resId);

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div className="menu-details">
        <h2> RestaurantMenu Id - {resId}</h2>
        <h2>{restaurant?.name}</h2>
        <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId}></img>
        <p>{restaurant?.area}</p>
        <p>{restaurant?.city}</p>
        <p>{restaurant?.avgRating}</p>
        <p>{restaurant?.costForTwoMsg}</p>
      </div>
      <div className="menu-wrap">
        <h2>Food Menu</h2>
        <div className="menu-list">
          <ul>
            {Object.values(restaurant?.menu?.items).map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
