import React,{useState} from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';

function Login() {
    const [regState , setRegState ] = useState(false);
    function handleClick(){
        console.log(regState);
        setRegState(!regState);
    }
    const google = () => {
        window.open("http://localhost:5000/auth/google", "_self");
    };
    async function loginRegister(credentials) {
      return fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      })
        .then(data => data.json())
     }
  return (
    <MDBContainer className="my-5">
      <MDBCard>
        <MDBRow className='g-0'>

          <MDBCol md='6'>
            <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp' alt="login form" className='rounded-start w-100'/>
          </MDBCol>

          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column'>

              <div className='d-flex flex-row mt-2'>
                <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
                <span className="h1 fw-bold mb-0">Logo</span>
              </div>

              <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Sign into your account</h5>
                {regState ? <MDBInput wrapperClass='mb-4' label='Name' id='formControlLg' type='text' size="lg"/> : null}
                <MDBInput wrapperClass='mb-4' label='Username' id='formControlLg' type='text' size="lg"/>
                {regState ?<MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"/> :null}
                <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"/>
                {regState ? <MDBInput wrapperClass='mb-4' label='Confirm Password' id='formControlLg' type='password' size="lg"/> : null }


              <MDBBtn className="mb-4 px-5" color='dark' size='lg' onSubmit={loginRegister}>{regState? "Register" : "Login"}</MDBBtn>

              <MDBBtn className="mb-2 w-100" onClick={google} size="lg" style={{backgroundColor: '#dd4b39'} }>
                <MDBIcon fab icon="google" className="mx-2"/>
                Sign in with google
              </MDBBtn>  

              {regState ? null :<a className="small text-muted" href="#!">Forgot password?</a>}
              <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>{regState ? "Already have an account?" :"Don't have an account?"} <p style={{color: '#393f81'}} onClick={handleClick} >{regState ?"Login here":"Register here"}</p></p>
            </MDBCardBody>
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </MDBContainer>
  );
}

export default Login;