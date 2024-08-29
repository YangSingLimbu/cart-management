import React, { useEffect, useState } from "react";
import { X } from "lucide-react";

const Modal = (props) => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleSubtract = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("overlay")) {
      props.closeModal();
    }
  };

  return (
    <div
      onClick={handleOverlayClick}
      className="overlay fixed inset-0 z-50 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center py-10"
    >
      <div className="bg-white w-[500px] h-[550px] py-4 rounded-lg flex flex-col">
        <div className="flex justify-between mb-4 px-2">
          <h2 className="text-xl font-bold">MMOM MOMOM - $10.00</h2>
          <button
            className="bg-black bg-opacity-10 rounded-full p-1"
            onClick={props.closeModal}
          >
            <X />
          </button>
        </div>

        <div className="overflow-y-auto flex-1 px-2">
          <div>
            <p className="text-base font-normal">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earu
            </p>
            <img
              className="h-80 mx-auto mt-4"
              src="https://planetbombay.com/uploads/products/808e95de7f7a3e3e47944394f2992a48.jpg"
              alt="Product"
            />
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
              onClick={handleSubtract}
            >
              -
            </button>
            <span className="text-xl font-bold bg-gray-200 w-[80px] text-center">
              {count}
            </span>
            <button
              className="bg-gray-200 text-xl px-2 py-1 rounded hover:bg-gray-50 transition duration-300 w-12"
              onClick={handleAdd}
            >
              +
            </button>
          </div>
          <button
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-400 transition duration-300"
            onClick={() => console.log(`Added ${count} items to the cart`)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
