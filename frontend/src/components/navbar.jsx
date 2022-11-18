import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

const Navbar = (props) => {
  // const { firstName, setFirstName } = props;
  
      const logout = async () => {
        await fetch("http://localhost:8080/logout", {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });

        props.setFirstName('');
        console.log(props.firstName);

      }
     
      let menu;

      if (props.firstName === undefined) {
        menu = (
          <div>
            <Link className="p-4 display-7" to="/login">Log in</Link>
            <Link className="p-4 display-7" to="/register">Register</Link>
          </div>
        )
      }else {
        menu = (
          <ul className='navbar-nav me-auto mb-2 mb-md-0'>
            <li className='nav-item active'>
              <Link className="p-4 display-7" to="/login" onClick={logout}>Logout</Link>
            </li>
          </ul>
        )
      }



      return (
        <nav className="text-center">
          <div className="container-fluid">
            <h1 className="text-danger h1">Only Lonely?</h1>
            
             {menu}
           
          </div>
          <p><dt>This is a questionnaire that checks how lonely you feel!</dt></p>
          <div>
            <Link className="p-4 display-7" to="/">Home</Link>
            <Link className="p-4 display-7" to="/measure">Check your condition</Link>
            <Link className="p-4 display-7" to="/pastscore">track your past scores</Link>
          </div>
        </nav>    
      );
    
}
 
export default Navbar;
