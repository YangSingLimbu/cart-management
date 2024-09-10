import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import { CartState } from "./Context";
import CartItem from "./cartItem";

const CartModal = ({ closeCart }) => {
  const {
    state: { cart },
    dispatch,
    clearCart,
  } = CartState();

  const [totalPrice, setTotalPrice] = useState(0);

  const tax = 4.0;
  const delivery = 0.0;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("overlay")) {
      closeCart();
    }
  };

  useEffect(() => {
    const price = cart.reduce((acc, item) => {
      return acc + item.price * item.qty;
    }, 0);
    setTotalPrice(price);
  }, [cart]);
  return (
    <div
      onClick={handleOverlayClick}
      className="overlay fixed inset-0 z-50 bg-black bg-opacity-30 backdrop-blur-sm flex justify-end"
    >
      <div className="bg-white w-[40%] h-[100vh] py-4 px-4 rounded-lg overflow-y-auto">
        <div className="flex">
          <button
            className="bg-black bg-opacity-10 rounded-full p-1"
            onClick={closeCart}
          >
            <X />
          </button>
          <h1 className="text-3xl font-semibold ml-10">Food Cart</h1>
        </div>
        <div className="mt-4">
          {cart.length === 0 ? (
            <h1 className="text-2xl text-center font-semibold mt-8">
              Your cart is empty!
            </h1>
          ) : (
            cart.map((product, index) => (
              <CartItem key={index} product={product} index={index} />
            ))
          )}
        </div>

        {cart.length !== 0 && (
          <div className="w-full bg-slate-200 px-2 py-1">
            <div className="leading-loose">
              <div className="flex justify-between">
                <label>Subtotal:</label>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <label>Tax:</label>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <label>Delivery Charge:</label>
                <span>${delivery.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mt-4">
                <label className="text-2xl font-semibold">Grand Total:</label>
                <span className="text-2xl font-semibold">
                  ${(totalPrice + tax + delivery).toFixed(2)}
                </span>
              </div>
            </div>
            <button className="bg-red-600 text-white px-4 py-2 text-xl font-semibold mt-8 rounded hover:bg-red-400 transition duration-300 w-full">
              Checkout
            </button>
            <button
              onClick={clearCart}
              className="text-red-600 bg-white px-4 py-2 text-xl font-semibold rounded hover:bg-red-400 hover:text-white transition duration-300 mt-2 w-full"
            >
              Clear All
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
