import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Redirect } from "react-router-dom";

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const submit = async (e) => {
        e.preventDefault();

        const response = await fetch("http://localhost:8080/api/login", {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ email, password })
        })

        const content = await response.json();
        console.log(content[0]);
        
        setRedirect(true);
        props.setFirstName(content[0].first_name);
    }

    if(redirect) {
        return <Redirect to="/" />
        }

    return ( 
      <div>
        <form onSubmit={submit}>
          <h1 class="h3 mb-3 fw-normal">Please log in</h1>

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

            <button class="btn btn-primary btn-lg" type="submit">Log in</button>
          
        </form>
      </div>
     );
}
 
export default Login;