import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode'

type loginProps = {
  mocketAppRedirect: () => void;
}

const Login = ({ mocketAppRedirect }: loginProps): JSX.Element => {
  
  const successfulGoogleResponse = (credentialResponse: any) => {
    const userInfo = jwt_decode(credentialResponse.credential);

    fetch('/api/session/login', {
      method:"POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userInfo)
    }) 
    .then(res => res.json())
    .then(data => {
      mocketAppRedirect();
    })
    mocketAppRedirect();
  }
  
  return (
    <div className="container Login">
      <h1>Login with Google Oauth</h1>
      <div className="googleLogin">
      <GoogleLogin
        onSuccess={(credentialResponse) => successfulGoogleResponse(credentialResponse)}
        onError={() => {
          console.log('Login Failed');
        }}
      />
      </div>
    {/* <Button>
      <Link className="linkBtn" style={{ textDecoration: 'none' }} to="/readyup">Login with Google</Link>
    </Button> */}
  </div>
  )
}

export default Login;