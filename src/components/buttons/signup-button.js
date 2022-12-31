import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export const SignupButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleSignUp = async () => {
    await loginWithRedirect({
      screen_hint: "signup",
      appState: {
        returnTo: "/",
      },
    });
  };

  return (
    <li className="nav-item" onClick={handleSignUp}>
      Sign Up
    </li>
  );
};