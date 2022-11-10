const express = require('express');
const bodyParser = require("body-parser")
const cors = require('cors');
const app = express();
const knex = require("./knex");
const port = process.env.PORT || 8080;
require("dotenv").config({ path: "./.env.local" });

// receive json
app.use(express.json());

app.use(cors());

app.get('/', function(req, res){
   res.send("Hello FUCKING world!");
});

// app.post("/", function (req, res) {
//   try {
//     res.json(req.body); // jsonで返却
//   } catch (error) {
//     console.error(error);
//   }
// });

app.post("/getSurvey", (req, res) => {
  try {
    res.json(req.body);
    const name = req.body["name"]
    console.log(name.firstName);
    const answers = req.body["answers"]
    const email = req.body["email"]
    const rawScore = [];
    Object.keys(answers).forEach(key => rawScore.push(Number(answers[key])));
    const totalScore = rawScore.reduce((previous, current) => previous + current);
    const date = req.body["yearMonthDate"]
    console.log(typeof date);

    knex.transaction(async trx => {
      await trx("users")
        .insert([{ first_name: name.firstName, last_name: name.lastName, email: email }])
      // const created_user = await trx("users").insert({first_name: name.firstName, last_name: name.lastName, email: email});
      // console.log(created_user);
      const fetch_user_id = await knex
        .select("id")
        .from("users");
      const lastID = fetch_user_id[fetch_user_id.length - 1].id + 1;
      await trx("score_date")
        .insert([{ score: totalScore, date: date, user_id: lastID}])
    });
    
    
  } catch (error) {
   console.error(error);
  }
});

app.listen(port, () => {
   console.log(`Example app lsitening on port ${port}`);
});