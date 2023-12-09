import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import BottomNavbar from "../BottomNavBar/BottomNavBar";
import "./HomeScreen.css";

const HomeScreen = () => {
  const groceryLists = ["List A", "List B", "List C"];
  const navigate = useNavigate(); // Initialize the useNavigate hook for navigation

  const navigateToListDetails = (listName) => {
    // Navigate to ListDetailScreen with the listName as a URL parameter
    navigate(`/list/${listName}`);
  };

  return (
    <div className="home-screen">
      <h1>Home</h1>
      <p className="heading-sub">Your Grocery Lists</p>

      <div className="grocery-lists">
        {groceryLists.map((list, index) => (
          <div
            className="list-item"
            key={index}
            onClick={() => navigateToListDetails(list)}
          >
            <span className="list-title">{list}</span>
            <span className="list-actions">
              <button className="action-button">&#10003;</button>
              <button className="action-button">&#10006;</button>
            </span>
          </div>
        ))}
      </div>

      <button className="add-button">Add</button>

      <BottomNavbar />
    </div>
  );
};

export default HomeScreen;
