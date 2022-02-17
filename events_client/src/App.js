import { useState, useEffect } from "react";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import jwt_decode from "jwt-decode";
import { AuthContext } from "./hooks/context";

function App() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const authKey = sessionStorage.getItem("sessionKey");
    if (authKey) {
      const decoded = jwt_decode(authKey);
      console.log(decoded);
      const authUser = decoded.user_id;
      if (authUser) {
        setUser(authUser);
      }
    }
  }, []);

  return user ? (
    <Home
      logout={() => {
        setUser(null);
        sessionStorage.setItem("sessionKey", null);
      }}
      user={user}
    />
  ) : (
    <AuthContext.Provider value={{ token, setToken }}>
      <Login storeUser={(userObj) => setUser(userObj)} />
    </AuthContext.Provider>
  );
}

export default App;
