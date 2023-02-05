import { IMG_CDN_URL } from "./constant";

const RestaurantCard = (props) => {
  const { cloudinaryImageId, name, cuisines, locality } = props.restaurant.data;
  //getting the IMG_CDN_URL from constant file
  // const { user, email } = props.user;

  return (
    <div className="w-56 p-2 m-2 shadow-md bg-pink-50">
      <img src={IMG_CDN_URL + cloudinaryImageId}></img>
      <h4 className="font-bold text-lg">{name}</h4>
      <p>{cuisines.join(", ")}</p>
      <h4 className=" font-medium">Location : {locality}</h4>
      {/* <h2>User Details : {user + " - " + email}</h2> */}
    </div>
  );
};

export default RestaurantCard;
