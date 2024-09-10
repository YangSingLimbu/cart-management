import React, { useContext, useEffect, useState } from "react";
import { X } from "lucide-react";
import { CartState } from "./Context";

const Modal = ({ item, closeModal }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const [qty, setQty] = useState(1);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("overlay")) {
      closeModal();
    }
  };

  return (
    <div
      onClick={handleOverlayClick}
      className="overlay fixed inset-0 z-50 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center py-10"
    >
      <div className="bg-white w-[500px] h-[550px] py-4 rounded-lg flex flex-col">
        <div className="flex justify-between mb-4 px-2">
          <h2 className="text-xl font-bold">
            {item.name} - ${item.price}
          </h2>
          <button
            className="bg-black bg-opacity-10 rounded-full p-1"
            onClick={closeModal}
          >
            <X />
          </button>
        </div>

        <div className="overflow-y-auto flex-1 px-2">
          <div>
            <p className="text-base font-normal">{item.description}</p>
            <img className="h-80 mx-auto mt-4" src={item.image} alt="Product" />
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-semibold">
              Additional Note (Optional):{" "}
            </h3>
            <textarea
              name=""
              id=""
              className="w-full h-20 border border-black"
            ></textarea>
          </div>
        </div>

        <div className="flex justify-between items-center mt-4 p-4 border-t">
          <div className="w-[200px] flex justify-between">
            <button
              className="bg-gray-200 text-xl px-2 py-1 rounded hover:bg-gray-50 transition duration-300 w-12"
              onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
            >
              -
            </button>
            <span className="text-xl font-bold bg-gray-200 w-[80px] text-center">
              {qty}
            </span>
            <button
              className="bg-gray-200 text-xl px-2 py-1 rounded hover:bg-gray-50 transition duration-300 w-12"
              onClick={() => setQty(qty + 1)}
            >
              +
            </button>
          </div>
          <button
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-400 transition duration-300"
            onClick={() => {
              closeModal();
              dispatch({
                type: "ADD_TO_CART",
                payload: { ...item, qty },
              });
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
