import './App.css';
import JsonData from './MOCK_DATA.json';
import ReactPaginate from 'react-paginate';
import React, { useState } from 'react';

function App() {
  const [state, setState] = useState(JsonData.slice(0, 50));
  console.log(state)
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
