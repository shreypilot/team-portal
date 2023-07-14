import React, { useState } from "react";
import UserCard from "./UserCard";
import UserData from "./UserData";

const users = [
  {
    id: 1,
    username: "John Doe",
    phoneNumber: "123-456-7890",
    subscribe: "Monthly",
    subscriptionDate: "2023-07-14",
    totalCalls: 10,
    totalConsultation: 5,
  },
  {
    id: 2,
    username: "John Doe",
    phoneNumber: "123-456-7890",
    subscribe: "Monthly",
    subscriptionDate: "2023-07-14",
    totalCalls: 10,
    totalConsultation: 5,
  },
];

const Dashboard = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleClick = (user) => {
    setSelectedUser(user);
  };

  const handleClose = () => {
    setSelectedUser(null);
  };

  return (
    <div className="flex flex-wrap justify-center">
      {users.map((user) => (
        <UserCard key={user.id} user={user} onClick={handleClick} />
      ))}
      {selectedUser && <UserData selectedUser={selectedUser} onClose={handleClose} />}
    </div>
  );
};

export default Dashboard;

