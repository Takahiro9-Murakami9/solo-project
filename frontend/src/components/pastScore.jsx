import './modal.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';


const PastScore = ({ handleClose, handleshowSecond, children, answers }) => {
    const showHideClassName = handleshowSecond ? "modal display-block" : "modal display-none";

    return ( 
      <div className="pastscore">
      
        test
     
      </div>
    );
}
 
export default PastScore;