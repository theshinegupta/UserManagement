// App.js
import React, { useState } from 'react';
import { connect } from 'react-redux';
import UserDetailsTable from './components/UserDetails/UserDetailsTable';
import AccountCreationForm from './components/AccountCreation/AccountCreationForm';
import Modal from './components/UserDetails/Modal';
import './App.css';

const App = ({ activeTab }) => {
  const [localActiveTab, setLocalActiveTab] = useState('User Details');
  const [showModal, setShowModal] = useState(false);

  const handleTabChange = (tab) => {
    setLocalActiveTab(tab);
  };

  const handleAddUser = () => {
    // Assuming you have an action to add a user
    // Dispatch the action to add the user
    // For example: dispatch(addUser(newUser));

    // Show the modal
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    // Optionally, you can perform any additional actions after closing the modal
  };

  return (
    <div className="app-container">
      <div className="tabs">
        <button onClick={() => handleTabChange('User Details')}>User Details</button>
        <button onClick={() => handleTabChange('Account Creation')}>Account Creation</button>
      </div>

      {localActiveTab === 'User Details' && <UserDetailsTable />}
      {localActiveTab === 'Account Creation' && <AccountCreationForm onAddUser={handleAddUser} />}

      {showModal && (
        <Modal onClose={handleCloseModal}>
          <p>User added successfully!</p>
          <button onClick={handleCloseModal}>Close</button>
        </Modal>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    activeTab: state.activeTab,
  };
};

export default connect(mapStateToProps)(App);
