import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
// import styled from "styled-components";

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
            <Link className="badge bg-primary m-2 fs-5" to="/login">Log in</Link>
            <Link className="badge bg-primary m-2 fs-5" to="/register">Register</Link>
          </div>
        )
      }else {
        menu = (
          <ul className='navbar-nav me-auto mb-2 mb-md-0'>
            <li className='nav-item active'>
              <Link className="badge bg-primary  m-2 fs-5" to="/login" onClick={logout}>Logout</Link>
            </li>
          </ul>
        )
      }

      // const NavUnlisted = styled.ul`text-decoration: none;`;

      // const linkStyle = {
      //   margin: "1rem",
      //   textDecoration: "none",
      //   color: 'blue'
      // };



      return (
        <nav className="text-center">
          <div className="container-fluid">
            <h1 className="text-danger h1">Only Lonely?</h1>
            
             {menu}
           
          </div>
          <p><dt>This is a questionnaire that checks how lonely you feel!</dt></p>
          <div>
            <Link className="badge bg-info m-2 fs-4" to="/">Home</Link>
            <Link className="badge bg-info m-2 fs-4" to="/measure">Check your condition</Link>
            <Link className="badge bg-info m-2 fs-4" to="/pastscore">track your past scores</Link>
          </div>
        </nav>    
      );
    
}
 
export default Navbar;
