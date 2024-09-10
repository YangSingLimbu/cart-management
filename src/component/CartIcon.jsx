import { ShoppingCart } from "lucide-react";
import React from "react";
import { CartState } from "./Context";

const CartIcon = ({ openCart }) => {
  const {
    state: { cart },
  } = CartState();

  return (
    <div
      className="fixed bottom-16 right-10 bg-red-100 rounded-sm hover:bg-red-300 cursor-pointer"
      onClick={openCart}
    >
      <div className="flex items-center  px-2 py-4 relative">
        <span className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 bg-red-500 px-1 text-white rounded-lg w-[30px] text-center">
          {cart.reduce((acc, c) => c.qty + acc, 0)}
        </span>
        <ShoppingCart size={40} />
        <span className="text-xl font-semibold ml-4">Cart</span>
      </div>
    </div>
  );
};

export default CartIcon;
