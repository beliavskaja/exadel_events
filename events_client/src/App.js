import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Events from "./pages/events/Events";
import MyEvents from "./pages/myEvents/MyEvents";
import jwt_decode from "jwt-decode";
import { AuthContext } from "./hooks/context";

function App() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const authKey = sessionStorage.getItem("sessionKey");
    if (authKey && authKey !== "null") {
      const authUser = jwt_decode(authKey);

      if (authUser) {
        setUser(authUser);
      }
    }
  }, []);

  const logout = () => {
    setUser(null);
    sessionStorage.setItem("sessionKey", null);
  };

  return user ? (
    <Routes>
      <Route path="/events" element={<Events logout={logout} user={user} />} />
      <Route
        path="/myevents"
        element={<MyEvents logout={logout} user={user} />}
      />
    </Routes>
  ) : (
    <AuthContext.Provider value={{ token, setToken }}>
      <Login storeUser={(userObj) => setUser(userObj)} />
    </AuthContext.Provider>
  );
}

export default App;
