import { GoogleLogin } from 'react-google-login';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const clientId = process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID;

function Login({ handleLoginClick }) {
  const MySwal = withReactContent(Swal);
  const onSuccess = async (googleData) => {

    const userData = localStorage.getItem('userData');

    if (!userData) {
      MySwal.fire({
        text: `Logged in as ${googleData.profileObj.email}`,
        didOpen: () => {
          MySwal.isLoading()
        },
      });
    }


    localStorage.setItem('userData', JSON.stringify(googleData.profileObj));
    handleLoginClick();
  }

  const onFailure = (res) => {
    MySwal.fire({
      title: <p>An error occured</p>,
    });
  }

  return(
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}/>
    </div>
  )
}

export default Login;
