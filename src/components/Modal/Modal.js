import React from "react";
import "./Modal.css"; // Make sure to create Modal.css for styling

const Modal = ({
  itemName,
  store,
  quantity,
  listName,
  onConfirm,
  onCancel,
  onClose,
}) => {
  return (
    <div className="modal-backdrop">
      <div className="modal-box">
        <h2>Add Item?</h2>
        <p>
          {quantity} {itemName} from {store} to {listName}?
        </p>
        <div className="modal-actions">
          <button onClick={onConfirm}>Yes</button>
          <button onClick={onCancel}>No</button>
          <button onClick={onClose}>Back</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
