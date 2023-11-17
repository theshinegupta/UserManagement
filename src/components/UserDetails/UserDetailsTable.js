// UserDetailsTable.js
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './UserDetailsTable.css'; // Import your custom stylesheet
import Modal from './Modal'; // Custom Modal component
import Button from './Button'; // Custom Button component

const UserDetailsTable = () => {
  const users = useSelector((state) => state.users);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleRowClick = (_, user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedUser(null); // Clear selectedUser when closing modal
    setShowModal(false);
  };

  const generateReport = () => {
    // Implement report generation logic here
    console.log(`Generating report for user: ${selectedUser?.username}`);
    handleCloseModal();
  };

  const filteredUsers = users.filter(user =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by username"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <table>
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Username</th>
            <th>Creation Time</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user, index) => (
            <tr key={user.id} onClick={(e) => handleRowClick(e, user)}>
              <td>{index + 1}</td>
              <td>{user.username}</td>
              <td>{user.createdTime}</td> {/* Update property name accordingly */}
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <Modal>
          <div>
            <p>{`Serial Number: ${selectedUser?.id}`}</p>
            <p>{`Username: ${selectedUser?.username}`}</p>
            <p>{`Creation Time: ${selectedUser?.createdTime}`}</p> {/* Update property name accordingly */}
            {/* Add more user details as needed */}
          </div>
          <Button onClick={generateReport}>Generate Report</Button>
          <Button onClick={handleCloseModal}>Close</Button>
        </Modal>
      )}
    </div>
  );
};

export default UserDetailsTable;
