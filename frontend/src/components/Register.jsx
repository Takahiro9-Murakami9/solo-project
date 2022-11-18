import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Redirect } from "react-router-dom";

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const submit = async (e) => {
      e.preventDefault();

      await fetch("http://localhost:8080/api/register", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ firstName, lastName, email, password }),
     })
     .then((response) => response.json())
     .then((data) => console.log(data));
     
     setRedirect(true);
    }
    
    if(redirect) {
    return <Redirect to="/login" />
    }

    return(
        <div>
        <form onSubmit={submit}>
          <h1 class="h3 mb-3 fw-normal">Register</h1>
          
          <div>
            <label><dt>First name</dt>
              <input 
                type="text" 
                class="col-xs-3" 
                id="floatingInput" 
                placeholder="firstname" 
                required
                onChange={(e) => setFirstName(e.target.value)}
              />
            </label>
          </div>

          <div>
            <label><dt>Last name</dt>
              <input 
                type="text" 
                class="col-xs-3" 
                id="floatingInput" 
                placeholder="lastname" 
                required
                onChange={(e) => setLastName(e.target.value)}
              />
            </label>
          </div>

          <div>
            <label><dt>email</dt>
              <input  
                type="email" 
                class="col-xs-3" 
                id="floatingInput" 
                placeholder="name@example.com" 
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>

          <div>
            <label><dt>password</dt>
              <input 
                type="password" 
                class="col-xs-3" 
                id="floatingPassword" 
                placeholder="Password" 
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>

            <button class="btn btn-primary btn-lg" type="submit">Submit</button>
          
        </form>
      </div>

    );
};

export default Register;