import React, { createContext, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';

// contexts
export const UserNameContext1 = createContext('');
export const UserNameContext2 = createContext({});
export const UserLoggedInOrNotContext1 = createContext('');
export const UserLoggedInOrNotContext2 = createContext({});
export const UserImageContext1 = createContext('');
export const UserImageContext2 = createContext({});

// interface userInfo {
//   name       : string;
//   image      : string;
//   email      : string;
//   isLoggedIn : boolean;
// }

// type UserContextType = {
//   user: userInfo;
//   setUser: (props: userInfo) => void; 
// };

export const UserContext: object = createContext([])

function App() {

  // states
  const [user, setUser] = useState({
    name       : '',
    email      : '',
    image      : '',
    isLoggedIn : false
  })

  const [userName, setUserName] = useState('')
  const [userLoggedInOrNot, setUserLoggedInOrNot] = useState('')
  const [userImage, setUserImage] = useState('')

  return (
    <UserContext.Provider value={[user, setUser]}>
    <UserNameContext1.Provider value={userName}>
    <UserNameContext2.Provider value={setUserName}>
    <UserLoggedInOrNotContext1.Provider value={userLoggedInOrNot}>
    <UserLoggedInOrNotContext2.Provider value={setUserLoggedInOrNot}>
    <UserImageContext1.Provider value={userImage}>
    <UserImageContext2.Provider value={setUserImage}>
      <Header />
    </UserImageContext2.Provider>
    </UserImageContext1.Provider>
    </UserLoggedInOrNotContext2.Provider>
    </UserLoggedInOrNotContext1.Provider>
    </UserNameContext2.Provider>
    </UserNameContext1.Provider>
    </UserContext.Provider>
  );
}

export default App;
