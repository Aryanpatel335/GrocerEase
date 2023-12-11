import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Use Routes instead of Switch for react-router-dom v6
import OpeningScreen from "./components/OpeningScreen/OpeningScreen";
import HomeScreen from "./components/HomeScreen/HomeScreen";
import ListDetail from "./components/ListDetailScreen/ListDetail";
import GroupScreen from "./components/GroupScreen/GroupScreen";
import GroupDetails from "./components/GroupDetails/GroupDetails";
import "./App.css";
import Deals from "./components/DealsPage/Deals";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };
  const [lists, setLists] = useState([
    // ... pre-populated lists

    {
      name: "List A",
      items: [
        { name: "Milk", store: "Click to Add", price: "Click to Add" },
        { name: "Bread", store: "Click to Add", price: "Click to Add" },
        // { name: "Apples", price: "0.99" },
        // { name: "Chicken", price: "5.49" },
        // { name: "Rice", price: "1.89" },
        // { name: "Tomatoes", price: "2.30" },
      ],
    },
    {
      name: "List B",
      items: [
        { name: "Eggs", store: "Click to Add", price: "Click to Add" },
        { name: "Orange Juice", store: "Click to Add", price: "Click to Add" },
        { name: "Lettuce", store: "Click to Add", price: "Click to Add" },
        // { name: "Pasta", price: "1.25" },
        // { name: "Coffee", price: "6.99" },
        // { name: "Butter", price: "3.59" },
      ],
    },
    {
      name: "List C",
      items: [
        { name: "Cheese", store: "Click to Add", price: "Click to Add" },
        // { name: "Potatoes", price: "3.20" },
        // { name: "Carrots", price: "1.10" },
        // { name: "Beef", price: "5.99" },
        // { name: "Fish", price: "7.49" },
        // { name: "Spinach", price: "3.00" },
      ],
    },
  ]);

  // Mock data for lists, replace with real data as needed

  const deals = [
    {
      itemName: "Milk",
      deals: [
        { store: "Food Basics", price: "4.20", quantity: "4L" },
        { store: "Walmart", price: "4.50", quantity: "4L" },
        { store: "No Frills", price: "4.60", quantity: "4L" },
        { store: "Walmart", price: "2.50", quantity: "2L" },
      ],
    },
    {
      itemName: "Bread",
      deals: [
        { store: "Metro", price: "2.99", quantity: "1 loaf" },
        { store: "Loblaws", price: "2.79", quantity: "1 loaf" },
        { store: "FreshCo", price: "1.99", quantity: "1 loaf" },
      ],
    },
    {
      itemName: "Apples",
      deals: [
        { store: "Farmers Market", price: "3.00", quantity: "1lb" },
        { store: "Kroger", price: "2.50", quantity: "1lb" },
        { store: "Whole Foods", price: "3.50", quantity: "1lb" },
      ],
    },
    {
      itemName: "Chicken",
      deals: [
        { store: "Costco", price: "10.00", quantity: "5lb" },
        { store: "Safeway", price: "9.50", quantity: "5lb" },
        { store: "Trader Joe's", price: "11.00", quantity: "5lb" },
      ],
    },
    {
      itemName: "Rice",
      deals: [
        { store: "Asian Market", price: "15.99", quantity: "10lb" },
        { store: "Walmart", price: "14.99", quantity: "10lb" },
        { store: "Target", price: "16.99", quantity: "10lb" },
      ],
    },
    {
      itemName: "Tomatoes",
      deals: [
        { store: "Local Farm", price: "1.50", quantity: "1lb" },
        { store: "Loblaws", price: "1.75", quantity: "1lb" },
        { store: "Metro", price: "1.60", quantity: "1lb" },
      ],
    },
    // ...you can add other deals if needed
    {
      itemName: "Eggs",
      deals: [
        { store: "Food Basics", price: "2.99", quantity: "12pcs" },
        { store: "Walmart", price: "2.79", quantity: "12pcs" },
        { store: "Farmers Market", price: "3.50", quantity: "12pcs" },
        { store: "Costco", price: "5.00", quantity: "24pcs" },
      ],
    },
    {
      itemName: "Orange Juice",
      deals: [
        { store: "Trader Joe's", price: "3.99", quantity: "1L" },
        { store: "Safeway", price: "4.50", quantity: "1L" },
        { store: "Walmart", price: "3.50", quantity: "1L" },
        { store: "Whole Foods", price: "5.00", quantity: "1L" },
      ],
    },
    {
      itemName: "Cheese",
      deals: [
        { store: "Kroger", price: "4.00", quantity: "500g" },
        { store: "Aldi", price: "3.75", quantity: "500g" },
        { store: "Publix", price: "4.50", quantity: "500g" },
        { store: "Walmart", price: "3.90", quantity: "500g" },
      ],
    },
  ];

  const addItemToList = (itemName, listName, price, store) => {
    setLists((currentLists) => {
      const listIndex = currentLists.findIndex(
        (list) => list.name === listName
      );
      if (listIndex > -1) {
        // Find the index of the item if it already exists in the list
        const itemIndex = currentLists[listIndex].items.findIndex(
          (item) => item.name === itemName
        );

        const newLists = [...currentLists]; // Clone the current lists array for immutability
        let newItems = [...newLists[listIndex].items]; // Clone the items array within the selected list

        if (itemIndex > -1) {
          // If the item exists, update its price and store
          newItems[itemIndex] = { ...newItems[itemIndex], price, store };
        } else {
          // If the item doesn't exist, add the new item
          newItems = [...newItems, { name: itemName, price, store }];
        }

        // Update the items array for the selected list
        newLists[listIndex].items = newItems;
        return newLists;
      }
      return currentLists;
    });
  };
  const groups = [
    {
      name: "Houre",
      members: 5,
      lists: [
        "List A",
        "List B"
      ]
    },
    {
      name: "Room B",
      members: 4,
      lists: [
        "List A"
      ]
    },
    {
      name: "Club Team",
      members: 10,
      lists: [
        "List C"
      ]
    }
  ]

  return (
    <Router>
      <div className="App">
        <Routes>
          {" "}
          {/* Changed from Switch to Routes */}
          <Route
            path="/"
            element={
              isLoggedIn ? (
                <HomeScreen />
              ) : (
                <OpeningScreen onLogin={handleLogin} />
              )
            }
          />
          <Route
            path="/home"
            element={
              isLoggedIn ? (
                <HomeScreen />
              ) : (
                <OpeningScreen onLogin={handleLogin} />
              )
            }
          />
          <Route
            path="/list/:listName"
            element={
              isLoggedIn ? (
                <ListDetail lists={lists} />
              ) : (
                <OpeningScreen onLogin={handleLogin} />
              )
            }
          />
          <Route
            path="/list/:listName/deals/:itemName"
            element={
              isLoggedIn ? (
                <Deals deals={deals} addItemToList={addItemToList} />
              ) : (
                <OpeningScreen onLogin={handleLogin} />
              )
            }
          />
          <Route
            path="/groups"
            element={
              isLoggedIn ? (
                <GroupScreen groups={groups} lists={lists}/>
              ) : (
                <OpeningScreen onLogin={handleLogin} />
              )
            }
          />
          <Route
            path="/groupDetails/:groupName"
            element={
              isLoggedIn ? (
                <GroupDetails groups={groups} lists={lists}/>
              ) : (
                <OpeningScreen onLogin={handleLogin} />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
