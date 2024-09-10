import React from "react";
import { CartState } from "./Context";

const CartItem = ({ product, index }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const updateQty = (index, qty) => {
    dispatch({
      type: "UPDATE_QTY",
      payload: { index, qty },
    });
  };

  const removeCart = (index) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: { index },
    });
  };
  return (
    <div className="flex p-8 pb-3">
      <img className="h-36 w-36 object-cover" src={product.image} alt="" />
      <div className="ml-8">
        <h1 className="text-2xl font-semibold">{product.name}</h1>
        <div className="flex mt-4">
          <div className="flex justify-between w-32">
            <button
              className="bg-gray-200 text-xl px-2 py-1 rounded hover:bg-gray-50 transition duration-300 w-10"
              onClick={() =>
                updateQty(index, product.qty > 1 ? product.qty - 1 : 1)
              }
            >
              -
            </button>
            <span className="text-md font-bold bg-gray-200 w-10 text-center pt-1">
              {product.qty}
            </span>
            <button
              className="bg-gray-200 text-xl px-2 py-1 rounded hover:bg-gray-50 transition duration-300 w-10"
              onClick={() => updateQty(index, product.qty + 1)}
            >
              +
            </button>
          </div>
          <span className="ml-8 flex items-center text-xl font-semibold">
            ${product.price * product.qty}
          </span>
        </div>
        <button
          className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-400 transition duration-300 mt-4"
          onClick={() => removeCart(index)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
