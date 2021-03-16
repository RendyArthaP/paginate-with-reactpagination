import './App.css';
import JsonData from './MOCK_DATA.json';
import ReactPaginate from 'react-paginate';
import React, { useState } from 'react';

function App() {
  const [users, setUsers] = useState(JsonData.slice(0, 50));
  const [pageNumber, setPageNumber] = useState(0)

  const userPerPage = 10
  const pagePerVisited = pageNumber * userPerPage
  const displayUsers = users
    .slice(pagePerVisited, pagePerVisited + userPerPage)
    .map(user => (
      <div key={user.id}>
        <span>{user.first_name}</span>
        <span> {user.last_name}</span>
      </div>
    ))

  return (
    <div className="App">
      <h1>List Users</h1>
      {displayUsers}
    </div>
  );
}

export default App;
