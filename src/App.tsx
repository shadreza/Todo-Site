import React, { createContext, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';

// contexts
export let UserContext = createContext <any[]> ([])

function App() {

  // states
  const [user, setUser] = useState({
    name       : '',
    email      : '',
    image      : '',
    isLoggedIn : false
  })

  return (
    <UserContext.Provider value={[user, setUser]}>
      <Header />
    </UserContext.Provider>
  );
}

export default App;
