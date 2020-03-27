import React, { useState } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

function App() {
  const [userState, setUserState] = useState({
    users: [
      {
        username: 'BloodyLink'
      },
      {
        username: 'David-Redfield'
      },
      {
        username: 'DvdSage'
      }
    ]
  });

  const switchUserHandler = (event) => {
    setUserState(
      {
        users: [
          {
            username: 'BloodyLink'
          },
          {
            username: event.target.value
          },
          {
            username: 'DvdSage'
          }
        ]
      }
    )
  }

  return (
    <div className='App'>
      <UserInput changed={switchUserHandler} username={userState.users[1].username}/>
      <UserOutput number='1' username={userState.users[0].username}/>
      <UserOutput number='2' username={userState.users[1].username}/>
      <UserOutput number='3' username={userState.users[2].username}/>
    </div>
  );
}

export default App;
