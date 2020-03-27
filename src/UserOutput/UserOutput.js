import React from 'react';

const outputStyle = {
  backgroundColor: 'white',
  font: 'inherit',
  border: '1px solid blue',
  padding: '8px'
};

const UserOutput = props => {
  return (
    <p style={outputStyle}>
      User number {props.number}: {props.username}
    </p>
  );
};

export default UserOutput;
