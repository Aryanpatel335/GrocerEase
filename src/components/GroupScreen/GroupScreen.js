import React from "react";
import { useNavigate } from "react-router-dom";
import BottomNavbar from "../BottomNavBar/BottomNavBar";
import "./GroupScreen.css";

const GroupScreen = ({ groups }) => {
  const navigate = useNavigate();

  if (groups.length === 0) {
    return <div className="no-groups">No Groups Found</div>;
  }

  const navigateToGroupDetails = (groupName) => {
    navigate(`/groupDetails/${groupName.toLowerCase()}`);
  };

  return (
    <div className="group-container">
      <header className="group-header">
        <h1>Groups</h1>
      </header>
      <ul className="group-list">
        <li className="group-item group-header-row">
          <span className="group-name header">Group Name</span>
          <span className="group-members header">Members</span>
          <span className="add-to-group-button header">View Group & Add Lists/Items</span>
        </li>
        {groups.map((groupInfo, index) => (
          <li key={index} className="group-item">
            <span className="group-name">{groupInfo.name}</span>
            <span className="group-members">{groupInfo.members}</span>
            <button
              className="add-to-group-button"
              onClick={() => navigateToGroupDetails(groupInfo.name)}
            >
              +
            </button>
          </li>
        ))}
      </ul>
      <BottomNavbar />
    </div>
  );
};

export default GroupScreen;
