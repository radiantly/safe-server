import React from "react";
import ReactDOM from "react-dom/client";
import { AuthProvider } from "@asgardeo/auth-react";
import "@fontsource-variable/inter";
import "@fontsource/righteous";
import "./index.css";

import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider
      config={{
        signInRedirectURL: window.location.origin,
        signOutRedirectURL: window.location.origin,
        scope: ["openid", "profile"],
        ...window.configs,
      }}
    >
      <App />
    </AuthProvider>
  </React.StrictMode>
);
