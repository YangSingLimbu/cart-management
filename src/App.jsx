import React, { useState } from "react";
import "./data.js";

import test_data from "./data.js";
import Modal from "./component/Modal.jsx";
import ShopContextProvider, { CartState } from "./component/Context.jsx";
import CartModal from "./component/CartModal.jsx";
import { ShoppingCart } from "lucide-react";
import Card from "./component/Card.jsx";
import CartIcon from "./component/CartIcon.jsx";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [currentModal, setCurrentModal] = useState(test_data[0].id);
  const [showCart, setShowCart] = useState(false);

  const openModal = (id) => {
    setCurrentModal(id);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setCurrentModal(null);
  };

  const openCart = () => {
    setShowCart(true);
  };

  const closeCart = () => {
    setShowCart(false);
  };

  return (
    <>
      <div className="flex flex-col items-center relative">
        <ShopContextProvider>
          <CartIcon openCart={openCart} />
          {test_data.map((item, index) => (
            <Card
              key={index}
              id={item.id}
              title={item.name}
              price={item.price}
              des={item.description}
              url={item.image}
              openModal={openModal}
            />
          ))}
          {showModal && (
            <Modal
              closeModal={closeModal}
              item={test_data.find((item) => item.id === currentModal)}
            />
          )}

          {showCart && <CartModal closeCart={closeCart} />}
        </ShopContextProvider>
      </div>
    </>
  );
}

export default App;
