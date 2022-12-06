import React from 'react';
import './App.css';

function App() {
  return (
    fetch("http://localhost:9292/allposts")
  .then((r) => r.json())
  .then((data) => console.log(data))
  )
}

export default App;
