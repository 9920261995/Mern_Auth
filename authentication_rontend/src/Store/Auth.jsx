import React from "react";

export default React.createContext({
  isAuthenticated: false,
  responseId: "",
  updateLoginStatus: () => {},
  signInWithGoogle: () => {},
});
