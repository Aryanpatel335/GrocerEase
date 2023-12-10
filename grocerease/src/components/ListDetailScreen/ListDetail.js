import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import BottomNavbar from "../BottomNavBar/BottomNavBar";
import "./ListDetail.css"; // Make sure the CSS file matches the styles you want

const ListDetail = ({ lists }) => {
  const navigate = useNavigate();
  const { listName } = useParams();
  const list = lists.find((l) => l.name === listName);

  if (!list) {
    return <div>List not found</div>;
  }

  const navigateToDeals = (itemName) => {
    navigate(`/list/${listName}/deals/${itemName}`);
  };

  return (
    <div className="list-detail-container">
      <header className="list-header">
        <h1>{list.name}</h1>
      </header>
      <div className="list-table">
        <div className="list-row list-header">
          <span className="list-column item-name">Item</span>
          <span className="list-column item-location">Location</span>
          <span className="list-column item-price">Price</span>
          <span className="list-column add-column-header">Add</span>
        </div>
        {list.items.map((item, index) => (
          <div key={index} className="list-row">
            <span className="list-column item-name">{item.name}</span>
            <span className="list-column item-location">{item.store}</span>
            <span className="list-column item-price">{item.price}</span>
            <div className="list-column add-price-column">
              <button
                className="add-price-button"
                onClick={() => navigateToDeals(item.name)}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
      <BottomNavbar />
    </div>
  );
};

export default ListDetail;
