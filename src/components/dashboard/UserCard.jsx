import React from "react";

const UserCard = ({ user, onClick }) => {
  return (
    <div className="w-64 mx-4 my-8 p-4 bg-white rounded-lg shadow cursor-pointer" onClick={() => onClick(user)}>
      <h2 className="text-xl font-semibold mb-2">{user.username}</h2>
      <p className="text-gray-600">{user.phoneNumber}</p>
    </div>
  );
};

export default UserCard;

