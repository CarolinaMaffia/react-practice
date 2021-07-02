import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import './App.css';
import UsersList from './components/Users/UsersList';


function App() {
  const [usersLists, setUsersList] = useState([]);

  const addUserHandler = (userName, userAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, {name: userName, age: userAge, id: Math.random().toString() }];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersLists}/>
    </div>
  );
}

export default App;
