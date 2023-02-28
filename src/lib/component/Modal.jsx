import React from "react";
import '../style/App.css'

function Modal({ children }) {
  return (
      <div className="modalBackground">
        <div className="modalContainer">{children}</div>
      </div>
  );
}
export default Modal;
