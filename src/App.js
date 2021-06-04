import React from 'react';
import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import { useSelector } from 'react-redux';
import { login, selectUser } from './features/counter/userSlice';
import Login from './Login';

function App() {
  const user = useSelector(selectUser)

  return (
    <div className="app">    
        <Header />

        {!user ? (
          <Login />
        ) : (
          <div className="app__body">
          <Sidebar />
          <Feed />
          {/* Widget */}
        </div>
        )}
    </div>
  );
}

export default App;
