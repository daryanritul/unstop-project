import React, { useState } from 'react';
import Assessment from './Screens/Assesment/Assessment';
import Navbar from './Components/Navbar/Navbar';

const App = () => {
  const [menuToggle, setMenuToggle] = useState(false); // State to manage Menu Open and Close in Mobile View
  return (
    <div className="app">
      <Navbar menu={menuToggle} setMenu={setMenuToggle} />
      <Assessment setMenu={setMenuToggle} />
    </div>
  );
};

export default App;
