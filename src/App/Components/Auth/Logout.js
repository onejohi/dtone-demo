import { GoogleLogout } from 'react-google-login';

const clientId = process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID;

function Logout({ handleLogoutClick }) {
    const onSuccess = () => {
      localStorage.removeItem('userData');
      handleLogoutClick();
    };
  
    return(
      <div>
        <GoogleLogout
          clientId={clientId}
          buttonText={"Logout"}
          onLogoutSuccess={onSuccess}/>
      </div>
    )
  }
  
  export default Logout;