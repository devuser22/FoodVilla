import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const clearCartItems = () => {
    dispatch(clearCart());
  };
  return (
    <div className="my-10 mx-10 p-4">
      <span className=" p-2 border bg-slate-700 text-white font-bold ">
        Cart Items - {cartItems.length}
      </span>
      <button
        className="p-2 bg-green-700 font-semibold text-white shadow-lg  mx-5 "
        onClick={() => clearCartItems()}
      >
        Clear Cart
      </button>
      <div className="flex flex-wrap">
        {cartItems.map((item) => (
          <FoodItem {...item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
