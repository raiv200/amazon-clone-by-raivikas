import React ,{useState} from "react";
import "./Login.css";
import { Link, useHistory} from "react-router-dom";
import {auth} from "../firebase.js";
function Login() {
       
    const history =useHistory();
    const [email,setEmail]= useState();
    const [password,setPassword]= useState();
    

    const signIn =(e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email,password)
             .then((auth)=>{
                 history.push("/");
             })
             .catch(error => alert(error.message))
    }

    const register =(e)=>{
        
         e.preventDefault();
         // do some fancy using Firebase register

         auth.createUserWithEmailAndPassword(email,password)
            .then((auth)=>{
                console.log(auth);
                if(auth){
                    history.push("/");
                }
            })
            .catch(error =>alert(error.message))



    }

  return (
    <div className="login">
      <Link to="/" style={{ textDecoration: "none" }}>
        <img
          className="login__image"
          src="https://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"
        />
      </Link>

      <div className="login__container">
        <h2> Sign In</h2>

        <form>
          <h5> Email</h5>
          <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

          <h5> Password</h5>
          <input type="password"  value={password} onChange={e => setPassword(e.target.value)} />

          <button type="submit" onClick={signIn}
          className="login__signInButton">Sign In</button>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice. Please se our privacy Notice,cookie Notice and Interest-based
          Ads.
        </p>

        <button  onClick={register} className="login__registerButton">
          
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
