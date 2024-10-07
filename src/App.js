import React, { useState, useCallback, useMemo } from 'react';
import Filter from './components/Filter';
import UserList from './components/UserList';
import './App.css';

function App() {
  const [filter, setFilter] = useState('');

  const userList = useMemo(() => [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Charlie' },
    { id: 3, name: 'David' },
    { id: 4, name: 'Max' },
    { id: 5, name: 'Kate' },
    { id: 6, name: 'Bob' },
    { id: 7, name: 'Megan' },
    { id: 8, name: 'Tom' },
    { id: 9, name: 'Clare' },
    { id: 10, name: 'Alex' },
  ], []);

  const filterUsers = useCallback((text) => {
    return userList.filter((user) =>
      user.name.toLowerCase().includes(text.toLowerCase())
    );
  }, [userList]);

  const filteredUsers = useMemo(() => filterUsers(filter), [filter, filterUsers]);

  return (
    <div className="App">
      <h1>User List</h1>
      <Filter setFilter={setFilter} />
      <UserList users={filteredUsers} />
    </div>
  );
}

export default App;