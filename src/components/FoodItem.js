import { IMG_CDN_URL } from "./constant";

const FoodItem = ({ name, description, cloudinaryImageId, price }) => {
  console.log("name" + name);

  return (
    <div className="w-56 p-2 m-2 shadow-md bg-pink-50 ">
      <h2>{name}</h2>
      <img src={IMG_CDN_URL + cloudinaryImageId}></img>
      <p className="my-1">{description}</p>
      <p>Price :{price / 100}</p>
    </div>
  );
};
export default FoodItem;
