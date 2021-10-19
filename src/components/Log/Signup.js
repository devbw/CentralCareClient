import React, { useState } from 'react';
import Signuppro from './SignupForm/Signuppro';
import Signupuser from './SignupForm/Signupuser'

const Signup = () => {

  const [user, setUser] = useState(true);
  const [proUser, setProUser] = useState(false);

  const stateUser = () => {
    setUser(true);
    setProUser(false);
  };
  const stateProUser = () => {
    setUser(false);
    setProUser(true);
  };

  let showConditionnal;

  if (user) {
    showConditionnal = <Signupuser />;
  } else {
    showConditionnal = <Signuppro />;
  }

  return (
    <div className="signup">
      <h3>Je suis</h3>
      <div className="circle-container">
        <div className="circle-choice" onClick={stateUser}>
          <div className="circle">
            <i className="fas fa-users"></i>
          </div>
          <p>Intervenant <br/> Bénéficiaire</p>
        </div>
        <div className="circle-choice" onClick={stateProUser}>
          <div className="circle">
            <i className="fas fa-store"></i>
          </div>
          <p>Structure <br/> Professionnelle</p>
        </div>
      </div>
      {showConditionnal}
    </div>
  );
};

export default Signup;