// import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Navbar from './components/navbar';
import Radio from './components/radio';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.css';
import PastScore from "./components/pastScore";
import Login from "./components/login";
import Register from "./components/Register";
import React, { useEffect, useState } from 'react';


function App() {

  const [firstName, setFirstName] = useState('');

    useEffect(() => {
        (
            async () => {
                const response = await fetch("http://localhost:8080/user", {
                    headers: {
                      "Content-Type": "application/json",
                    },
                    credentials: "include",
                })
                
                const content = await response.json();
                console.log(content);
                setFirstName(content.first_name)
            }

        )();
    }); 
  
  return (
    
    // <BrowserRouter>
      <Router>
        <div className="App">
          <Navbar firstName={firstName} setFirstName={setFirstName}/>
          <main className="container">
            <Switch>
              <Route exact path="/">
                <Home firstName={firstName}/>
              </Route>
              <Route path="/measure">
                <Radio />
              </Route>
              <Route path="/pastscore">
                <PastScore />
              </Route>
              <Route path="/login">
                <Login setFirstName={setFirstName}/>
              </Route>
              <Route path="/register">
                <Register />
              </Route>
            </Switch>
          </main>
        </div>
      </Router>
    // </BrowserRouter>
    
  );
}

export default App;
