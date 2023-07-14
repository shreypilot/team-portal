import React from "react";

const UserData = ({ selectedUser, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-2">{selectedUser.username}</h2>
        <p>Subscribe: {selectedUser.subscribe}</p>
        <p>Subscription Date: {selectedUser.subscriptionDate}</p>
        <p>Total No. of Calls: {selectedUser.totalCalls}</p>
        <p>Total Consultation: {selectedUser.totalConsultation}</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 mt-4 rounded" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default UserData;
