import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import BottomNavbar from "../BottomNavBar/BottomNavBar";
import "./ListDetail.css"; // Import the CSS stylesheet

const ListDetail = ({ lists }) => {
  const navigate = useNavigate();
  const { listName } = useParams();
  const list = lists.find((l) => l.name === listName);

  if (!list) {
    return <div>List not found</div>;
  }
  const navigateToDeals = (itemName) => {
    navigate(`/deals/${itemName}`);
  };

  return (
    <div className="list-detail-container">
      <header className="list-header">
        <h1>{list.name}</h1>
      </header>
      <ul className="list-items">
        {list.items.map((item, index) => (
          <li key={index} className="list-item">
            <span className="item-name">{item.name}</span>
            <span className="item-price">Locate Price</span>
            <button
              className="add-price-button"
              onClick={() => navigateToDeals(item.name)}
            >
              +
            </button>
          </li>
        ))}
      </ul>
      <div className="bottom-navbar">
        {/* Include your BottomNavbar component or its content here */}
      </div>
      <BottomNavbar />
    </div>
  );
};

export default ListDetail;
