import { useEffect, useState } from "react";
import Cookies from "js-cookie";

import AuthContext from "./contexts/AuthContext";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
function App() {
  const encodedUserInfo = Cookies.get("userinfo");
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!encodedUserInfo) return;
    setUser(JSON.parse(atob(encodedUserInfo)));
  }, [encodedUserInfo]);

  return (
    <AuthContext.Provider value={user}>
      {user ? <Dashboard /> : <Home />}
    </AuthContext.Provider>
  );
}

export default App;
