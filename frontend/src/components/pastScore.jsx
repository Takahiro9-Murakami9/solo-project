import './modal.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, { useEffect, useState } from 'react';
import { Line } from "react-chartjs-2";
import { Chart as chartjs } from "chart.js/auto";


const PastScore = () => {
  // const{ id } = props;
  // const userID = id;
  const [ID, setID] = useState([]);
  const [score, setScore] = useState([]);
  const [date, setDate] = useState([]);
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
            // console.log(idArr);

            const scoreArr = [];
            content.forEach((value) => scoreArr.push(value["score"]));
            // console.log(scoreArr);

            const dateArr = [];
            content.forEach((value) => dateArr.push(value["date"]));
            // console.log(dateArr);
           
            setID(idArr);
            setScore(scoreArr);
            setDate(dateArr);
            // setUserID(content.user_id);
        }

    )();
},[]); 
  
const labels = date;
const graphData = {
  labels: labels,
  datasets: [
    {
      label: "feeling loneliness",
      data: score,
      borderColor: "rgb(75, 192, 192)",
    }
  ]
};

// const options {} = {
//   scales: {
//     xAxis: {
//       min: 0,
//       max: 80,
//     }
//   }
// };


    return ( 
      <div className="pastscore">
      
        id: {ID}<br></br>
        score: {score}<br></br>
        date: {date}
        <Line data={graphData} />

      </div>
    );
}
 
export default PastScore;