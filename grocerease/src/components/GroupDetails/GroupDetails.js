import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BottomNavbar from "../BottomNavBar/BottomNavBar";
import "./GroupDetails.css";

const GroupDetails = ({ groups, lists }) => {
  const navigate = useNavigate();
  const { groupName } = useParams();
  const group = groups.find((group) => group.name.toLowerCase() === groupName.toLowerCase());

  const ShoppingList = ({ lists }) => {
    const [selectedListIndex, setSelectedListIndex] = useState(0);

    const handleChangeList = (newIndex) => {
      setSelectedListIndex(newIndex);
    };

    const navigateToDeals = (listName, itemName) => {
      navigate(`/list/${listName}/deals/${itemName}`);
    };

    return (
      <div className="group-list-container">
        <div className="group-list-header">
          <h1>{group.name}</h1>
        </div>
        <div className="group-list-table">
          <div className="group-list-row group-list-header">
            <span className="group-list-column item-header">Item</span>
            <span className="group-list-column price-header">Price</span>
            <span className="group-list-column add-column-header">Add</span>
          </div>
          {lists[selectedListIndex].items.map((item, index) => (
            <div key={index} className="group-list-row">
              <span className="group-list-column item-name">{item.name}</span>
              <span className="group-list-column item-price">${item.price}</span>
              <div className="group-list-column add-price-column">
                <button
                  className="add-price-button"
                  onClick={() => navigateToDeals(lists[selectedListIndex].name,item.name)}
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="group-list-buttons">
          {lists.map((list, index) => (
            <button key={index} className="list-change-button" onClick={() => handleChangeList(index)}>
              {list.name}
            </button>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="group-container">
      {group ? <ShoppingList lists={group.lists.map(listName => lists.find(list => list.name === listName))} /> : <p>No group found with the name {groupName}</p>}
      <BottomNavbar />
    </div>
  );
};

export default GroupDetails;
