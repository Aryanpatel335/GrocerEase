import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BottomNavbar from "../BottomNavBar/BottomNavBar";
import "./Deals.css"; // Make sure the corresponding CSS file is created

// Assuming you have a modal component, you can import it
// If not, you'll have to create one
import Modal from "../Modal/Modal";

const Deals = ({ deals, addItemToList }) => {
  const navigate = useNavigate();
  const { listName, itemName } = useParams();
  // We need to know which list we're adding the deal to.
  // This could come from the app state, context, a URL parameter, etc.
  // For this example, let's assume we're always adding to "List A".
  const currentListName = listName;

  const itemDeals =
    deals.find((deal) => deal.itemName === itemName)?.deals || [];
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedDeal, setSelectedDeal] = useState(null);

  const openModal = (deal) => {
    setSelectedDeal(deal);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedDeal(null);
    setModalOpen(false);
  };
  const confirmAddItem = () => {
    if (selectedDeal) {
      // Call addDealToList with the selected deal and navigate back to the list
      addItemToList(itemName, listName, selectedDeal.price, selectedDeal.store);
      navigate(`/list/${listName}`); // Navigate back to the list details page
    }
  };
  // const handleAddDealToList = () => {
  //   if (selectedDeal) {
  //     // Call the addDealToList function with the selected deal's details
  //     // and the name of the current list.
  //     addDealToList(
  //       itemName,
  //       currentListName,
  //       selectedDeal.price,
  //       selectedDeal.store
  //     );
  //     closeModal();
  //   }
  // };
  const goBackToList = () => {
    navigate(`/list/${listName}`);
  };

  return (
    <div className="deals-container">
      <div className="deals-header">
        <button className="back-button" onClick={goBackToList}>
          Back to List
        </button>
        <h1 className="deals-title">Deals for {itemName}</h1>
      </div>
      <ul className="deals-list">
        {itemDeals.length > 0 ? (
          itemDeals.map((deal, index) => (
            <li key={index} className="deal-item">
              <span className="deal-price">${deal.price}</span>
              <span className="deal-info">
                {deal.quantity} at {deal.store}
              </span>
              <button
                className="deal-add-button"
                onClick={() => openModal(deal)}
              >
                +
              </button>
            </li>
          ))
        ) : (
          <li>No deals found for this item.</li>
        )}
      </ul>
      {isModalOpen && (
        <Modal
          itemName={itemName}
          store={selectedDeal.store}
          quantity={selectedDeal.quantity}
          listName={currentListName}
          onConfirm={confirmAddItem}
          onCancel={closeModal}
          onClose={closeModal}
        />
      )}
      <BottomNavbar />
    </div>
  );
};

export default Deals;
