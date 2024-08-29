import React from "react";
import PropTypes from "prop-types";

const Card = (props) => {
  return (
    <div className="bg-slate-50 flex w-[650px] p-4 border rounded-md shadow-md mt-2">
      <img className="h-36 w-36 object-cover" src={props.url} alt="" />
      <section className="ml-6 w-[500px] h-28 my-auto flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold">{props.title}</h2>
          <p className="text-sm font-light">{props.des}</p>
        </div>
        <div className="flex justify-between py-1">
          <span className="text-xl font-bold">${props.price}</span>
          <button
            className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-600 transition duration-300"
            onClick={props.openModal}
          >
            Add to Cart
          </button>
        </div>
      </section>
    </div>
  );
};

Card.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  des: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default Card;
