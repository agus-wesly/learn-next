"use client";

import Modal from "../../components/Modal";
import { useState } from "react";

const page = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <div className="p-5">
      <button
        className="p-3 text-center bg-slate-100 dark:bg-gray-900 min-w-[90px] rounded-md font-bold text-base"
        onClick={() => setOpenModal(true)}
      >
        Open Modal
      </button>
      {openModal && (
        <Modal setOpenModal={setOpenModal}>
          <div className="absolute inset-0 w-screen h-screen bg-black/20 z-[5]" />
          <div className="absolute inset-0 z-[6] w-[80vw] mx-auto aspect-square bg-gray-900 text-white">
            <h1>Testing Modal</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
              quidem!
            </p>
            <button onClick={handleClose}>Close Modal</button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default page;
