import './modal.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, { useEffect, useState } from 'react';


const PastScore = () => {
  // const{ id } = props;
  // const userID = id;
  const [ID, setID] = useState();
  const [score, setScore] = useState('');
  const [date, setDate] = useState('');
  // const [userID, setUserID] = useState('');

  useEffect(() => {
    (
        async () => {
            const response = await fetch("http://localhost:8080/track", {
                headers: {
                  "Content-Type": "application/json",
                },
                credentials: "include",
            })
            
            const content = await response.json();
            const idArr = [];
            content.forEach((value) => idArr.push(value["id"]));
            console.log(idArr);

            const scoreArr = [];
            content.forEach((value) => scoreArr.push(value["score"]));
            console.log(scoreArr);

            const dateArr = [];
            content.forEach((value) => dateArr.push(value["date"]));
            console.log(dateArr);
           
            setID(idArr[0]);
            setScore(scoreArr[0]);
            setDate(dateArr[0]);
            // setUserID(content.user_id);
        }

    )();
}); 


    return ( 
      <div className="pastscore">
      
        id{ID}
        score{score}
        date{date}
        
      </div>
    );
}
 
export default PastScore;