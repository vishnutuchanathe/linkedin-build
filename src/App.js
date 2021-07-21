import React, {useEffect} from 'react';
import './App.css';
import Header from "./Header"
import Sidebar from './Sidebar';
import Feed from './Feed';
import { selectUser, login, logout } from './features/userSlice';
import { useSelector, useDispatch } from "react-redux";
import Login from './Login.js';
import { auth } from './firebase';

function App() {
  const user =  useSelector(selectUser);
  // const user = null;
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoURL: userAuth.photoURL,
        }));
      }else{
        dispatch(logout());
      }
    })
  }, [])
  return (
    <div className="App">
      <Header />
      {!user ? (<Login />) : (
        <div className="app__body">
      <Sidebar />
      <Feed />
      {/* Widgets */}
      </div>
      )}
    </div>
  );
}

export default App;
