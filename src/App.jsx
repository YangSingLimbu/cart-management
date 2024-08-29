import React, { useState } from "react";
import "./data.js";
import Card from "./component/card.jsx";
import test_data from "./data.js";
import Modal from "./component/Modal.jsx";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [currentModal, setCurrentModal] = useState(test_data[0].id);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="flex flex-col items-center">
        {test_data.map((item, index) => (
          <Card
            key={index}
            title={item.name}
            price={item.price}
            des={item.description}
            url={item.image}
            openModal={openModal}
          />
        ))}
        {showModal && <Modal closeModal={closeModal} />}
      </div>
    </>
  );
}

export default App;
