import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Navbar extends Component {
    render() { 
      return (
        <nav className="text-center">
          <div className="container-fluid">
            <h1 className="text-danger h1">Only Lonely?</h1>
          </div>
          <p><dt>This is a questionnaire that checks how lonely you feel!</dt></p>
        </nav>    
      );
    }
}
 
export default Navbar;
