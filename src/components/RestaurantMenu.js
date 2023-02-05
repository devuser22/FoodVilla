import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addItem } from "../utils/cartSlice";
import useRestaurant from "../utils/useRestaurant";
import { IMG_CDN_URL } from "./constant";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const dispatch = useDispatch();
  const addFoodItems = (item) => {
    dispatch(addItem(item));
  };

  //const [restaurant, setRestaurant] = useState(null);

  const restaurant = useRestaurant(resId);

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="grid grid-rows-1 grid-cols-2 justify-center p-10 ">
      <div className="">
        <h2> RestaurantMenu Id - {resId}</h2>
        <h2>{restaurant?.name}</h2>
        <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId}></img>
        <p>{restaurant?.area}</p>
        <p>{restaurant?.city}</p>
        <p>{restaurant?.avgRating}</p>
        <p>{restaurant?.costForTwoMsg}</p>
      </div>
      <div>
        <h2 className="font-bold text-white border p-3 shadow-xl bg-gray-500  ">
          Food Menu
        </h2>
        <ul>
          {Object.values(restaurant?.menu?.items).map((item) => (
            <li className=" border my-2 p-1" key={item.id}>
              - {item.name}
              <button
                className="rounded-none p-1 bg-green-700 text-white ml-2"
                onClick={() => addFoodItems(item)}
              >
                Add Item
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
