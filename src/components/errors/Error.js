import React from 'react';

const Error = (props) => {
  return (
    <div className="container-error">
      <p className="error">{props.error}</p>
    </div>
  );
};

export default Error;