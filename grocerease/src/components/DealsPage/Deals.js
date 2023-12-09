import React from "react";
import { useParams } from "react-router-dom";
import "./Deals.css"; // Make sure to create and import the corresponding CSS file

const Deals = ({ deals }) => {
  const { itemName } = useParams();
  // Filter deals for the specific item
  const itemDeals =
    deals.find((deal) => deal.itemName === itemName)?.deals || [];

  return (
    <div className="deals-container">
      <h1>Deals for {itemName}</h1>
      <ul className="deals-list">
        {itemDeals.length > 0 ? (
          itemDeals.map((deal, index) => (
            <li key={index} className="deal-item">
              <span className="deal-price">${deal.price}</span>
              <span className="deal-info">
                {deal.quantity} at {deal.store}
              </span>
            </li>
          ))
        ) : (
          <li>No deals found for this item.</li>
        )}
      </ul>
      {/* Include BottomNavbar if needed */}
    </div>
  );
};

export default Deals;
