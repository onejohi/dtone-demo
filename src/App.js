import './App.css';
import Login from './App/Components/Auth/Login';
import Logout from './App/Components/Auth/Logout';
import Header from './App/Common/Header';
import Search from './App/Components/Home/Search';
import { useEffect, useState } from 'react';
import { gapi } from 'gapi-script';

const clientId = process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID;

function App() {

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: '',
      });
    };
    gapi.load('client:auth2', start);
  });

  const [userData, setUserData ] = useState(
    localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : null
  );

  const handleLogout = () => {
    setUserData(null);
  };

  const handleLogIn = () => {
    const userData = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : null;
    setUserData(userData);
  };

  return (
    <div className="App">
      <div className='container'>
        <Header />
        {
          userData ? (
            <div>
              <p>You logged in as {userData.email}</p>
              <Search />
              <Logout handleLogoutClick={handleLogout} />
            </div>
          ) : (
            <Login handleLoginClick={handleLogIn} />
          )
        }
        
      </div>
    </div>
  );
}

export default App;
