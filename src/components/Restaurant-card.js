import { IMG_CDN_URL } from "./constant";

const RestaurantCard = (props) => {
  const { cloudinaryImageId, name, cuisines, locality } = props.restaurant.data;
  //getting the IMG_CDN_URL from constant file
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId}></img>
      <h4>{name}</h4>
      <p>{cuisines.join(", ")}</p>
      <h4>Location : {locality}</h4>
    </div>
  );
};

export default RestaurantCard;
