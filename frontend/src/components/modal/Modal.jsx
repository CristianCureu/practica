import React, { ReactNode, useState } from "react";
import "./Modal.css";
import ReactDOM, { createPortal } from "react-dom";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#242424",
  padding: "20px",
  zIndex: 1000,
};

const OVERLAY_STYLE = {
  width: "100vw",
  height: "100vh",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 1000,
};

const Modal = ({ isOpen, close, children }) => {
  if (isOpen) {
    return createPortal(
      <div>
        <div
          style={OVERLAY_STYLE}
          className="modal-backdrop"
          onClick={() => close()}
        />
        <div style={MODAL_STYLES} className="modal-child">
          <div
            className="btn-square btn-close btn-grad"
            onClick={() => close()}
          >
            <i style={{ position: "absolute" }} className="fas fa-times"></i>
          </div>
          {children}
        </div>
      </div>,
      document.body
    );
  } else {
    return null;
  }
};

export default Modal;
