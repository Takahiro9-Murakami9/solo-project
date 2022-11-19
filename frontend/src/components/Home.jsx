import React from 'react';
import Logo from './togather.png';

const Home = (props) => {
    

    return ( 
        <div className="bg-warning h-auto">
          <h1 className="text-white font-weight-bold">{props.firstName ? 'Hi ' + props.firstName + '!': 'You are not logged in'}</h1>
          <h2 className="p-4 text-muted">Do you often feel lonely?<br></br> Check out how lonely you feel right now.</h2>
          <img src={Logo} className="img-fluid" alt="togather" />
        </div>
     );
}
 
export default Home;