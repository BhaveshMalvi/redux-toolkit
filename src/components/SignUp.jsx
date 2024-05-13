/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import {getFirestore, collection, addDoc} from 'firebase/firestore'




import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBRow,
  MDBCol,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import { FirebaseApp, useFirebaseAuth } from '../Firebase/Context/FirebaseContext';


function SignUp() {

  const [email, setEmail] = useState('');
  const [passwd, setPasswd] = useState('');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');


  const loginDataFirebase = useFirebaseAuth() // call custom hook useFirebaseAuth
  // console.log(loginDataFirebase.signup());

  const firebaseStoredb = getFirestore(FirebaseApp)

  console.log(firebaseStoredb);


  const navigate = useNavigate()

  const handleSignup = async () => {
    navigate('/signin')
    loginDataFirebase.signup(email, passwd)
    return await addDoc(collection(firebaseStoredb, "signupUsers"), {
      first_Name:fname,
      last_Name:lname,
      email:email,
    })

    

  }

  return (
    <>



    {/* <MDBContainer fluid className='my-5' style={{width:"100%", display:"flex", justifyContent:"center"}}>

      <MDBRow className='g-0 align-items-center' style={{width:"80%"}}>
        <MDBCol col='6'>

          <MDBCard className='my-5 cascading-right' style={{backgroundColor: 'white', borderRadius:"100px 0 0 100px", width:"100%"}}>
            <MDBCardBody className='p-5 text-center'>

              <h2 className="fw-bold mb-5">Sign up now</h2>

              <MDBRow>
                <MDBCol col='6'>
                  <MDBInput 
                  wrapperClass='mb-4' 
                  label='First name' 
                  id='form1' 
                  type='text'
                  onChange={(e) => setFname(e.target.value)}
                  />
                </MDBCol>

                <MDBCol col='6'>
                  <MDBInput 
                  wrapperClass='mb-4' 
                  label='Last name' 
                  id='form2' 
                  type='text'
                  onChange={(e) => setLname(e.target.value)}
                  />
                </MDBCol>
              </MDBRow>

              <MDBInput 
              wrapperClass='mb-4' 
              label='Email' 
              id='form3' 
              type='email'
              onChange={(e) => setEmail(e.target.value)}
              
              />
              <MDBInput 
              wrapperClass='mb-4' 
              label='Password' 
              id='form4' 
              type='password'
              onChange={(e) => setPasswd(e.target.value)}
              />
              

              <div className='d-flex justify-content-center mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
              </div>

              <button style={{width:"100%", background:" black", color:"white", padding:"1rem"}} onClick={() => handleSignup()}>
                Sign Up
              </button>

              <div className="text-center">

                <p>or sign up with:</p>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='facebook-f' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='twitter' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='google' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='github' size="sm"/>
                </MDBBtn>

              </div>

            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol col='6' style={{borderRadius:"0 100px 100px 0"}}>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="w-100 rounded-4 shadow-4"
            alt="" fluid style={{background:"white", height:"36rem"}}/>
        </MDBCol>

      </MDBRow>

    </MDBContainer> */}






    <MDBContainer fluid className="p-3 my-5 " style={{height:"80vh", display:"flex", justifyContent:"center", alignItems:"center"}} >

      <MDBRow style={{background:"white", borderRadius:"20px", padding:"20px", boxShadow:" 2px 2px 20px 8px black"}}>

        <MDBCol col='5' md='6' className=' signUp_img '>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Phone image" />
           
        </MDBCol>


     
        <MDBCol col='1' md='6' style={{display:"grid", marginTop:"2rem"}} >

        
          <MDBInput  onChange={(e) => setFname(e.target.value)}   wrapperClass='mb-4'style={{fontSize:"xx-large"}} label='First Name' id='formControlLg' type='email' size="lg"/>
          <MDBInput  onChange={(e) => setLname(e.target.value)} wrapperClass='mb-4'style={{fontSize:"xx-large"}} label='Last Name' id='formControlLg' type='email' size="lg"/>
          <MDBInput onChange={(e) => setEmail(e.target.value)} wrapperClass='mb-4'style={{fontSize:"xx-large"}} label='Email address' id='formControlLg' type='email' size="lg"/>
          <MDBInput onChange={(e) => setPasswd(e.target.value)} wrapperClass='mb-4'style={{fontSize:"xx-large"}} label='Password' id='formControlLg' type='password' size="lg"/>


          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a>
          </div>

          <button onClick={() => handleSignup()}  className="mb-4 w-100" size="lg" style={{background:"black", color:"white"}}>Sign up</button>

          <button onClick={() =>navigate('/signin') } className="mb-4 w-100" size="lg" style={{backgroundColor: '#3b5998', color:"white"}}>
            Continue with Sign in
          </button>

          {/* <MDBBtn className="mb-4 w-100" size="lg" style={{backgroundColor: '#55acee'}}>
            <MDBIcon fab icon="twitter" className="mx-2"/>
            Continue with twitter
          </MDBBtn> */}

        </MDBCol>
     
      </MDBRow>

    </MDBContainer>
    </>










  );
}

export default SignUp;