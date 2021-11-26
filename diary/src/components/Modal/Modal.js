import React from "react";
import "./Modal.css";

const Modal = ({ active, setActive, children }) => {
  return (
    <div className={active ? "modal_dash active" : "modal_dash"} onClick={setActive}>
      <div
        className={active ? "modal__content active" : "modal__content"}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
