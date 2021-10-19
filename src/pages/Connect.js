import React, { useState } from "react";
import Navigation from "../components/navigation";
import Signin from "../components/Log/signin";
import Signup from "../components/Log/Signup";

const Connect = () => {
  const [login, setLogin] = useState(true);
  const [, setRegister] = useState(false);

  const stateLogin = () => {
    setLogin(true);
    setRegister(false);
  };
  const stateRegister = () => {
    setLogin(false);
    setRegister(true);
  };

  let showConditionnal;

  if (login) {
    showConditionnal = <Signin/>;
  } else {
    showConditionnal = <Signup/>;
  }

  return (
    <div className="login-register-container">
      <Navigation />
      <div className="connection-container">
        <div className="connection-login fade-in-bottom">
          <div className="connection-button">
            <button onClick={stateLogin}>CONNEXION</button>
            <button onClick={stateRegister}>INSCRIPTION</button>
          </div>
          <div className="divider"></div>
          {showConditionnal}
        </div>
      </div>
    </div>
  );
};

export default Connect;
