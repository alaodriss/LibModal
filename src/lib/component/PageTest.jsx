import React from "react";
import { useState } from "react";
import Modal from "./Modal";
import '../style/App.css'


const PageTest = () => {
  const [openModal, setOpenModal] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setOpenModal(true);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input className="button-59" type="submit" value="Click Here" />
        {openModal && (
          <Modal>
            <div>
              <button
                className="btn-close"
                onClick={() => {
                  setOpenModal(false);
                }}
              >
                X
              </button>
              <p className="TextModal">Modal Here</p>
            </div>
          </Modal>
        )}
      </form>
    </div>
  );
};

export default PageTest;
