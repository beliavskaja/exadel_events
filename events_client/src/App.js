import { useState, useEffect } from 'react';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import getUsers from './services/api/axios/getUsers.api';

function App() {
  const [user, setUser] = useState(null);

  useEffect(async() => {
    const authKey = sessionStorage.getItem("sessionKey");
    if (authKey) {
      const users = await getUsers();
      console.log(users);
      const authUser = users ? users.find(user => user.token === authKey) : null;
      if (authUser) {
        setUser(authUser);
      }
    }
  }, []);

  return (
    user ? (
    <Home logout = {() => {
      setUser(null)
      sessionStorage.setItem("sessionKey", null)
    }} user = {user}/>
    ) : (
    <Login storeUser = {(userObj) => setUser(userObj)}/>
    )
  );
}

export default App;
